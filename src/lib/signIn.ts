'use server'

import {signIn} from "@/app/api/auth/[...nextauth]/route";

export async function SignIn(creadentials: { email: string; password: string }) {
    // @ts-ignore
    const formData = new FormData();
    formData.append('email', creadentials.email);
    formData.append('password', creadentials.password);
    return await signIn("credentials",formData);
}
