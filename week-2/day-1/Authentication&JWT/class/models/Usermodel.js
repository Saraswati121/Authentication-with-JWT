const {Schema, model} = require("mongoose")
 

const UserSchema= new Schema({
    username: String,
    password:String,
    age:Number,
})

const UserModel= model("classuser", UserSchema)

module.exports= UserModel;