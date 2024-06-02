import React from "react";
import { SessionProvider } from "next-auth/react"
import {auth} from "@/app/api/auth/[...nextauth]/route";


type Props = {
    children?: React.ReactNode;
};

export const NextAuthProvider = async ({ children }: Props) => {
    const session = await auth()
    if (session?.user) {
        // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
        // filter out sensitive data before passing to client.
        session.user = {
            id: session?.user.id,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            token: session.user.token,
        }
    }

    return <SessionProvider session={session} basePath={`api/auth`}>{children}</SessionProvider>;
};
