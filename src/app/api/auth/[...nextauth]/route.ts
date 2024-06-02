import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma";

const credentialsProvider = () => {
    return CredentialsProvider({
        name: "Credentials",
        id: "credentials",
        credentials: {
            email: {label: "Email", type: "email", placeholder: "anwar@isdb-bisew.org"},
            password: {label: "Password", type: "password"},
        },
        async authorize(credentials, req){
            const user = await fetch(process.env.NEXTAUTH_URL+'/api/v1/auth/login',{
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    accept: "application/json",
                },
                body: JSON.stringify(credentials)
            })
                .then((response: Response) => response.json())
                .catch((error: Error) => {return error})

            if (user && user.status !== 400){
                return user;
            }else{
                return null;
            }
        }
    })
}

export const authOptions  = {
    adapter: PrismaAdapter(prisma),
    // Configure one or more authentication providers
    providers: [
        credentialsProvider
    ],
    pages: {
        signIn: "/auth",
        signOut: "/auth",
    },
    //@ts-ignore
    secret: process.env.NEXT_PUBLIC_SECRET,
    debug: true,
    callbacks: {
    }
}
const nextAuthInstance = NextAuth(authOptions);
export const { handlers, signIn, signOut, auth } = nextAuthInstance;
