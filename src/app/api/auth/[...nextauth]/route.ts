import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

const authOptions: NextAuthOptions = {
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
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXT_PUBLIC_SECRET,
    session: { strategy: "jwt" },
    debug: true
}
const nextAuthInstance = NextAuth(authOptions);
export { nextAuthInstance as GET,  nextAuthInstance as POST};
