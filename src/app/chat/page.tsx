"use client"
import React, {FC, useContext, useEffect} from "react";
import AppLayout from "@/components/layouts/appLayout";
import "react-chat-elements/dist/main.css"
import {ChatList, IChatItemProps} from "react-chat-elements";
import {PusherContext} from "@/components/layouts/PusherProvider";


interface chatProps {
    message: string;
}

const Chat: FC<chatProps> = () => {
    const pusher = useContext(PusherContext);
    const users: IChatItemProps[] = [
        {
            id: crypto.randomUUID(),
            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
            alt: 'Anwar',
            title: 'Anwar Jahid',
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
        }
    ];

    useEffect(() => {
        pusher.client.signin()
        pusher.client.subscribe('private-v1/chat/send')
            .bind('send_message', (e: any) => {
                console.log(e)
            })
    }, []);


    return (
        <AppLayout>
            <div className={`flex flex-row justify-center items-center`}>
                {/*Account List*/}
                <div>
                    <ChatList id={55} lazyLoadingImage={`https://avatars.githubusercontent.com/u/80540635?v=4`} dataSource={users} />
                </div>
                {/*MessageBOX*/}
                <div>

                </div>
            </div>
        </AppLayout>
    )
}
export default Chat;
