import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import prisma from "../prisma";
import email from "../counselormail";
import fixName from "../fixname";
import Link from "next/link";

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
    const { user } = session;

    const bookings = await prisma.booking.findMany();
    const thisUser = await prisma.user.findUnique({
        where: {
            email: user.email,
        }
    });

    return {
        props: {
            user: user,
            thisUser: thisUser,
            totalBookings: bookings
        }
    };
}

export default function Testprof({ totalBookings, user, thisUser }) {
    let name = fixName(user.name);

    const [imagePublicId, setImagePublicId] = useState("");
    const router = useRouter();

    const [image, setImage] = useState(null);

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const tmpImage = event.target.files[0];
            setImage(tmpImage);
        }
    };

    const uploadToServer = async () => {
        const formData = new FormData();
        const file = image;
        formData.append('inputFile', file);
        formData.append('user_id', user.email);
        try {
            const responseData = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            })
            if (responseData.status == 200) {
                router.reload('/profile');
            }
            console.log("uploaded image");
        } catch (error) {
            console.error(JSON.stringify(error));
        }
    };

    const resetToDefault = async () => {
        const defaultAvatar = await fetch(`/api/user/?email=${thisUser.email}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    avatar: 'default_avatar',
                }),
            }
        );

        router.reload();
    }

    if (thisUser != null || user.email == email) {
        return (
            <>
    
                <section style={{ 'backgroundColor': '#eee' }}>
                    <div className="container py-5">
    
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        {thisUser.avatar && thisUser.version !='' && <img src={`https://res.cloudinary.com/dgglbr1hh/image/upload/f_auto,q_auto,w_150,h_150,g_face,c_thumb,r_max/v${thisUser.version}/${thisUser.avatar}`} alt="avatar"
                                            className="rounded-circle img-fluid" style={{ 'width': '150px' }} />}
                                        {thisUser.avatar && thisUser.version =='' && <img src={`https://res.cloudinary.com/dgglbr1hh/image/upload/f_auto,q_auto,w_150,h_150,g_face,c_thumb,r_max/${thisUser.avatar}`} alt="avatar"
                                            className="rounded-circle img-fluid" style={{ 'width': '150px' }} />}
                                        <h5 className="my-3">{thisUser.name}</h5>
                                        {thisUser.email == email && <p className="text-muted mb-1">Counselor</p>}
                                        <div>
                                            <h4>Select an image to upload</h4>
                                            <input type="file" accept="image/*" onChange={uploadToClient} />
                                            <button className="mt-3" type="submit" onClick={uploadToServer}>Set Profile Image</button>
                                        </div>
                                        {thisUser.avatar != 'default_avatar' && <button className="mt-3" type="submit" onClick={resetToDefault}>Reset to default</button>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4 h-400">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{thisUser.name}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{thisUser.email}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                {user.email != email && <p className="mb-0">Bookings</p>}
                                                {user.email == email && <p className="mb-0">Current total bookings</p>}
                                            </div>
                                            <div className="col-sm-9">
                                                {user.email != email && <p className="text-muted mb-0">{thisUser.bookings}</p>}
                                                {user.email == email && <p className="text-muted mb-0">{totalBookings.length}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
            </>
        )
    } else {
        return (
            <>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <p className="fs-3">An error occurred.</p>
                    <Link href="/dashboard">
                        <a href="" className="btn btn-light">Dashboard</a>
                    </Link>
                </div>
            </div>
            </>
        )
    }
}