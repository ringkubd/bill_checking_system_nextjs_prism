import {NextResponse} from "next/server";
import {PusherServer} from "@/pusher/server";
import {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextApiRequest, res: NextApiResponse){
    const a = await req.formData();
    var data = {};
    a.forEach(function(value: any, key: string | number){
        // @ts-ignore
        data[key] = value;
    });
    const session = await getServerSession(authOptions)
    console.log(session)
    try {
        const socketID = data.socket_id;
        // @ts-ignore

        const user = {
            id: "some_id",
            user_info: {
                name: "John Smith",
            },
            watchlist: ['another_id_1', 'another_id_2']
        };
        // @ts-ignore
        // if (session){
            // @ts-ignore
            const authResponse = PusherServer.authenticateUser(socketID, user)
            return NextResponse.json(authResponse)
        // }else{
        //     throw Error("Not logged in");
        // }
    }catch(err){
        // @ts-ignore
        // const formData = await req.formData();
        return NextResponse.json(err.message)
    }

}
