import Link from 'next/link';
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import { useEffect } from 'react';
import fixName from '../fixname';

export default function Dashboard({ user }) {
    const finalName = fixName(user.name);
    console.log(finalName);

    useEffect(() => {
        const createUser = async (user) => {
            const userData = {
                email: user.email,
                name: finalName,
                bookings: 0,
                sessions: 0,
            }
            const data = await fetch(`/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
        }

        createUser(user);
    }, [])




    return (<>

        <p className="fw-bold fs-1 text-center">Welcome, {finalName}!</p>
        <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHdlbGxuZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="rounded mx-auto d-block" alt="..."></img>

        <p className="fs-5 lead" style={{ margin: "20px" }}>
            The website will provide counselling services to individuals of Kathmandu University who are experiencing difficulties in their lives. The website will offer a range of services including booking an appintment, online counselling, and many more.
            The website will also provide information on a range of topics such as mental health, relationships, and grief. <Link href="/about"><a href="" className="button1">Read More</a></Link>
        </p>
        <div className="d-grid gap-2">
            <Link href="/book"><button className="d-grid gap-2 col-6 mx-auto" type="button">Book an appointment</button></Link>
            <br></br>
            <button className="d-grid gap-2 col-6 mx-auto" type="button">Chat with the counsellor</button>
        </div>


    </>)
}

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
    return {
        props: { user },
    }
}