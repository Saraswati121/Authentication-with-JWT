const express= require("express")
const UserModel = require("./user.model")
const mongoose=require("mongoose")
const jwt= require("jsonwebtoken")
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/signup",async(req,res)=>{
    const {username,password,role,age} =req.body;

    const user= new UserModel({
        username,
        age,
        hash:password,
        role,
    })
    await user.save()

    const token= jwt.sign({
        id:user._id,
        username:user.username,
        role:user.role,
    },"Secrete")
    return res.send({token})
})

app.delete("/lecture/:lectureid",(req,res)=>{
    const token = req.headers["authorization"].split(" ")[1]
    const {role} = jwt.verify(token,"Secrete")
    if(role !== "admin"){
        return res.status(403).send("You don't have permission to delete a lecture")
    }else{
        return res.status(200).send("Lecture deleted successfully")
    }
})

mongoose.connect("mongodb://localhost:27017/web-17").then(()=>{
    app.listen(8080,()=>{
        console.log("server started")
    })
})
