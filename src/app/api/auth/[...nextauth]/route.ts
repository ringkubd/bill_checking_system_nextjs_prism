import NextAuth, {getServerSession, NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import type {GetServerSidePropsContext, NextApiRequest, NextApiResponse} from "next";

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
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
                if (user){
                    return user;
                }else{
                    return null;
                }
            }
        }),
    ],
    pages: {
        signIn: "/auth",
        signOut: "/auth",
    },
    //@ts-ignore
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            // Check if this sign in callback is being called in the credentials authentication flow. If so, use the next-auth adapter to create a session entry in the database (SignIn is called after authorize so we can safely assume the user is valid and already authenticated).
            if (req.query.nextauth.includes('callback') && req.query.nextauth.includes('credentials') && req.method === 'POST') {
                if (user) {
                    const sessionToken: any // Implement a function to generate the session token (you can use randomUUID as an example)
                    const sessionExpiry: any // Implement a function to calculate the session cookie expiry date

                    await adapter.createSession({
                        sessionToken: sessionToken,
                        userId: user.id,
                        expires: sessionExpiry
                    })

                    const cookies = new Cookies(req,res)

                    cookies.set('next-auth.session-token', sessionToken, {
                        expires: sessionExpiry
                    })
                }
            }

            return true;
        }
    },
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXT_PUBLIC_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 3000,
    },
    debug: true
}
const nextAuthInstance = NextAuth(authOptions);
export { nextAuthInstance as GET,  nextAuthInstance as POST};

export function auth(
    ...args:
        | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
        | [NextApiRequest, NextApiResponse]
        | []
) {
    return getServerSession(...args, authOptions)
}
