import {NextRequest, NextResponse} from "next/server";
import {PusherServer} from "@/pusher/server";

interface RequestBody {
    message: String;
    sender: {}
}

export async function POST(req: NextRequest,res: NextResponse){
    const body: RequestBody =  await req.json();
    const response = await PusherServer.trigger('private-v1/chat/send', 'send_message',{
        message: body.message,
        sender: body.sender
    })
    // @ts-ignore
    return NextResponse.json({message: "complete"})
}
