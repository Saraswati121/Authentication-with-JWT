const express=require("express")

const app=express()

const client_id= "b8427b1e7deb46a74fb4"
const client_secret= "0e9607a73b9a2567f89f4e227a6be18eec6c8514"

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    return res.sendFile(__dirname + "/index.html")
})

app.get("/github/callback",(req,res)=>{
    const requestToken= req.query.code;
    console.log("Token is:" ,requestToken)
    return res.send("login successfully")
})

app.listen(8080,()=>{
    console.log("server statrted")
})