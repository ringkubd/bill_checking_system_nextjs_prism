'use server'
import prisma from "@/lib/prisma";
import {hashPassword} from "@/lib/helpers";
import {NextApiRequest, NextApiResponse} from "next";
import {NextResponse} from "next/server";
// /api/v1/auth/login
export async function POST(req: NextApiRequest, res: NextApiResponse) {
    // @ts-ignore
    const reqData = await req.json();
    const user = await prisma.user.findUnique({
        where: { email: reqData.email },
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
            password: true,
        },
    });
    if (user && user.password === hashPassword(reqData.password)) {
        return NextResponse.json(user);
    }else{
        return NextResponse.json({
            status: 400,
            message: `Wrong Password or user not found`,
        });
    }
}
