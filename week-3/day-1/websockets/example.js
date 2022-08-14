const {EventEmitter}= require("events")

const emitter= new EventEmitter()

// emitter.on(event,cb)
// emitter.emit(event)

emitter.on("greeting",()=>{
    console.log("someone said hello")
})

emitter.emit("greeting")

emitter.on("logout",()=>{
    console.log("user logged out")
})

setTimeout(()=>{
    emitter.emit("logout")
},4000)