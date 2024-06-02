import prisma from "@/lib/prisma";
import {logger} from "@/lib/logger";
import {hashPassword} from "@/lib/helpers";
import {NextApiRequest, NextApiResponse} from "next";
import {NextResponse} from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    // @ts-ignore
    const formData = await req.json();
    logger.log(JSON.stringify(formData));
    try {
        const user = await prisma.user.create({
            data: {
                name: formData.name,
                email: formData.email,
                password: hashPassword(formData.password)
            },
        })
        return NextResponse.json(user);
    }catch(err){
        return NextResponse.json({
            status: 400,
            // @ts-ignore
            message: err?.message
        });
    }

}
