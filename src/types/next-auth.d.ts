import NextAuth, { User, type DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            image: any;
            email: any;
            id: string | any,
            token: string,
            name: string,
        }
    }
}
