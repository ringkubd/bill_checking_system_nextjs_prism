import prisma from "@/lib/prisma";
import {hashPassword} from "@/lib/helpers";
import type {NextRequest, NextResponse} from "next/server";

// /api/v1/auth/login
export async function POST(req: NextRequest, res: NextResponse) {
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
        console.log("password corrected");
        // @ts-ignore
        await res.json(user)
    }else{
        // res.status(400).end("Invalid credentials")
        // @ts-ignore
        return res.status(401).json({});
    }
}
