const express = require("express")
const mongoose= require("mongoose")
const UserModel= require("./models/Usermodel")
const jwt= require("jsonwebtoken")

const app= express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/signup",(req,res)=>{
    const {username,password,age} = req.body;
    const user= new UserModel({
        username,
        password,
        age
    })
    user.save()
    return res.send("signup successfully")
})

app.post("/login", async(req,res)=>{
    const {username,password} = req.body;
    const user=await UserModel.findOne({username,password})
    if(!user){
        return res.status(401).send("please enter valid credintial")
    }
    const token = jwt.sign({
        username:user.username,
        age:user.age,
        id:user._id
    },"Secret",{
        expiresIn:"1 hour"
    })

    const refreshToken= jwt.sign({},"REFRESHPASS",{expiresIn:"7 days"})

    return res.send({message:"login succesfully", token:token,refreshToken:refreshToken })
})


app.post("/newToken",(req,res)=>{
    const refreshToken= req.headers["authorization"].split(' ')[1]

    const validation= jwt.verify(refreshToken,"REFRESHPASS")
    if(validation){
        const newPrimaryToken=  jwt.sign({},"Secret", {expiresIn:"1 hour"})
        return res.send({token:newPrimaryToken})
    }
})

app.get("/profile/:id",async(req,res)=>{
    const {id}= req.params;
    const token= req.headers["authorization"].split(' ')[1];
    const verification =jwt.verify(token, "Secret")
    console.log(verification)
    const user=await UserModel.findOne({_id:id})
    res.send(user)
})

mongoose.connect("mongodb://localhost:27017/web-17").then(()=>{
    app.listen(8080,()=>{
        console.log("server statrted")
    })
})
