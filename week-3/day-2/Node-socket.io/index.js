const express=require("express")
const {Server} = require("socket.io")

const app=express()
const webServer = require("http").createServer(app)

const wss= new Server(webServer)

const history=[]
wss.on("connection",(ws)=>{
    // console.log("New user joined")
    //every single socket except current
    ws.broadcast.emit("new user")
    ws.emit("history",history)

    ws.on("new message",(m)=>{
        // console.log("got new message",m)
        history.push(m)
        wss.emit("new message",m)
    })
    
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

webServer.listen(8080,()=>{
    console.log("server listening on port 8080")
})