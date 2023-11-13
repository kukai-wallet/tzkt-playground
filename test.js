const signalR = require('@microsoft/signalr')

const ENDPOINT ="https://kukai.api.tzkt.io/v1/ws"  
const CHANNEL = "accounts"
const STREAM = "SubscribeToAccounts"

async function go() {
    const connection = new signalR.HubConnectionBuilder()
    .withUrl(ENDPOINT)
    .build();
    
    connection.on(CHANNEL, (msg) => {
        console.log('received::', msg);
    });
    
    await connection.start();
    await connection.invoke(STREAM, { addresses: [] });
}

go()
