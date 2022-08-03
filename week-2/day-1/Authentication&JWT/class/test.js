const jwt= require("jsonwebtoken")

function login(){
    const token= jwt.sign({name:"masai", batch:"web16"}, "pass", {expiresIn:"5 days"})
    console.log(token)
}

function privateRoute(){
    const token=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFzYWkiLCJiYXRjaCI6IndlYjE2IiwiaWF0IjoxNjU5NDYzNzQ0fQ.iphVrbS92W0Khnz27WJzPXMHWz2PSn-mNTRRhV_Zcf4`
    const verification= jwt.verify(token,"pass")
    console.log("verification:", verification)
}

// login()
privateRoute()