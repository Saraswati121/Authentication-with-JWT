const nodemailer= require("nodemailer")
const { readFileSync} =require("fs")
const hbs= require("handlebars")

const EMAIL= "ezequiel.welch@ethereal.email"
const PASSWORD= "fqUWTXz3c47ydSGWqA"

const transport= nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port:587,   //465
    auth: {
        user:EMAIL,
        pass:PASSWORD

        // oauth2:{
        //     accessToken: "tokengmail"
        // }
    }
})

const template= hbs.compile(readFileSync("./login.hbs","utf-8"))

transport.sendMail({
    from:"prabhanjan@gmail.com",
    to:"pandasaraswati2001@gmail.com",
    subject:"c1 score",
    text:"your c1 score updated",
    html: template({
        username:"saraswati",
        age:21,
        eligibility: "Eligible"
    })
}).then((info)=>{
    console.log("mail sent succesfully", info)
})