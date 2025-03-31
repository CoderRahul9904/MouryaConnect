const express=require("express")
const app=express()
const { Server }=require("socket.io")
const cors=require("cors")

const httpExpressServer=app.listen(3000,()=>{
    console.log("server is running on port 3000")
})


const io = new Server(httpExpressServer, {
    cors: {
        origin: "http://127.0.0.1:5500"
    }
});
// console.log(io)

app.use(express.json())
io.on("connection",(socket)=>{
    console.log("connection was establish")
    socket.on("MS",(message)=>{
        console.log(message.toString())
        socket.emit("SM",message.toString())
    })
})
app.use('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})

