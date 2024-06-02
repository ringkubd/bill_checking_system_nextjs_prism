import Pusher from 'pusher';
import {default as PusherClient} from 'pusher-js';

// @ts-ignore
const pusherServer: Pusher = new Pusher({
    // @ts-ignore
    appId: process.env.NEXT_PUBLIC_SOKETI_APP_ID,
    // @ts-ignore
    key: process.env.NEXT_PUBLIC_SOKETI_APP_KEY,
    // @ts-ignore
    secret: process.env.NEXT_PUBLIC_SOKETI_APP_SECRET,
    cluster: process.env.NEXT_PUBLIC_SOKETI_APP_ID,
    useTLS: true,
    scheme: 'https',
    // encrypted: true,
    // @ts-ignore
    host: process.env.NEXT_PUBLIC_SOKETI_HOST,
    port: process.env.NEXT_PUBLIC_SOKETI_PORT,
});

// @ts-ignore
const client = new PusherClient(process.env.NEXT_PUBLIC_SOKETI_APP_KEY, {
    clientId: process.env.NEXT_PUBLIC_SOKETI_APP_ID,
    userAuthentication: {
        endpoint: "/api/v1/auth/pusher",
        transport: "ajax",
        params: {},
        headers: {
            'contentType' : 'multipart/form-data',
        },
        paramsProvider: null,
        headersProvider: null,
        customHandler: () => {

        },
    },
    channelAuthorization: {
        endpoint: "/api/v1/auth/pusher",
    },
    cluster: process.env.NEXT_PUBLIC_SOKETI_APP_ID,
    wssHost: process.env.NEXT_PUBLIC_SOKETI_HOST,
    wsHost: process.env.NEXT_PUBLIC_SOKETI_HOST,
    wssPort: process.env.NEXT_PUBLIC_SOKETI_PORT,
    wsPort: process.env.NEXT_PUBLIC_SOKETI_PORT,
    enabledTransports: ['wss', 'ws'],
    useTLS: true,
    scheme: 'https',
})

export {
    pusherServer as PusherServer,
    client as PusherClient
}
