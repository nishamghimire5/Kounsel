import React from 'react'
import Link from 'next/link'
import {useSession, signIn, signOut} from 'next-auth/react'

const failedauth = () => {
    return (
        <>
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">Unauthorized</h1>
                <p className="fs-3">Only domains hosted at ku.edu.np are allowed.</p>
                <p className="lead">
                     Please try logging in again with a ku.edu.np domain.
                </p>
                <Link href="">
                    <a href="" className="btn btn-light" onClick={()=> signIn('google', {callbackUrl: '/dashboard'})}>Login</a>
                </Link>
            </div>
        </div>
        </>
    )
}

export default failedauth