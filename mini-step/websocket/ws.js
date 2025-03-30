

const websocket=require("ws")

const ws=new websocket.Server({port: 8000})

ws.addListener("connection",(socket)=>{
    socket.on("message",(message)=>{
        console.log(message.toString())
        socket.send(message.toString())
    })
    
    console.log("Connect was successful")
    socket.on("close", () => {
        console.log("Client disconnected");
    });

    // Handle errors
    socket.on("error", (error) => {
        console.error("WebSocket error:", error);
    });
})


