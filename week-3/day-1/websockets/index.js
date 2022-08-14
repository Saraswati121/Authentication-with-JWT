const {WebSocketServer}= require("ws")

const wss= new WebSocketServer({ port: 8080 })

// wss.on("listening",()=>{
//     console.log("server started")
// })

wss.on("connection",(ws)=>{
    console.log("Got new connection ")
    ws.send("welcome user")

    ws.on("message",(data)=>{
        console.log("socket sent message:",data.toString("utf-8"))
        ws.send("hello user")
    })
})