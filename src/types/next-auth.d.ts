import NextAuth, { User, type DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: bigint,
            token: string,
            name: string,
        }
    }
}
