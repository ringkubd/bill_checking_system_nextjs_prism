import {NextResponse} from "next/server";
import {PusherServer} from "@/pusher/server";
import {NextApiRequest, NextApiResponse} from "next";
import {auth, authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextApiRequest, res: NextApiResponse){
    // @ts-ignore
    const a = await req.formData();
    var data = {
        socket_id: ""
    };
    a.forEach(function(value: any, key: string | number){
        // @ts-ignore
        data[key] = value;
    });
    try {
        const socketID = data.socket_id;

        const user = {
            id: "some_id",
            user_info: {
                name: "John Smith",
            },
            watchlist: ['another_id_1', 'another_id_2']
        };
        const session = await auth()
        console.log( session, 456)
        // @ts-ignore
        if (session){
            const authResponse = PusherServer.authenticateUser(socketID, user)
            return NextResponse.json(authResponse)
        }else{
            throw Error("Not logged in");
        }
    }catch(err){
        // @ts-ignore
        console.log(err)
        // const formData = await req.formData();
        return NextResponse.json({
            status: 401,
            message: 'Not authorized'
        })
    }

}
