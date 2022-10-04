import React from 'react'
import Link from 'next/link'
import {useSession, getSession, signIn, signOut} from 'next-auth/react'

export default function Login() {
    return (
        <>
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <p className="fs-3">You are not logged in.</p>
                <Link href="">
                    <a href="" className="btn btn-light" onClick={()=> signIn('google', {callbackUrl: '/dashboard'})}>Login</a>
                </Link>
            </div>
        </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

        if (session) {
            return {
                redirect: {
                    destination: '/dashboard',
                    permanent: false,
                },
            }
        }
        return {
            props: {},
        }
}