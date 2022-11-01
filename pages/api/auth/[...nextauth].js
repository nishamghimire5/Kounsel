import NextAuth from 'next-auth/next';
import GoogleProvider from "next-auth/providers/google";
import Google from 'next-auth/providers/google';
import GoogleProfile from 'next-auth/providers/google';
import { signIn } from 'next-auth/react';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async signIn({user, account, profile}) {
            if (profile.email.endsWith("@student.ku.edu.np")) {
                return Promise.resolve(true);
            } else {
                return '/unauthorized';
            }            
        }
        },
    }

export default NextAuth(authOptions) 