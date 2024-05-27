import type {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";
import {logger} from "@/lib/logger";
import {omit} from "lodash";
import {hashPassword} from "@/lib/helpers";

export async function POST(req: NextRequest, res: NextResponse){
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
        // @ts-ignore
        await res.json(user)
    }catch(err){
        // @ts-ignore
        console.log(err)
        // @ts-ignore
        return NextResponse.json(omit(err), {
            status: 400,
        });
    }

}
