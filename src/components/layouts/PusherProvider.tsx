import {createContext, FC, ReactNode} from "react";
import {PusherClient, PusherServer} from "@/pusher/server";

interface Props {
    children: ReactNode;
}

export const PusherContext = createContext({
    server: PusherServer,
    client: PusherClient,
});
const PusherProvider: FC<Props> = ({children}) => {
    const pusher = {
        server: PusherServer,
        client: PusherClient
    }
    return (
        <PusherContext.Provider value={pusher}>
            {children}
        </PusherContext.Provider>
    )
}

export default PusherProvider;
