
// function add(){
//     console.log("inside add")
// }

// async function fetch(){
//     console.log("inside fetch")
// }

// console.log("before")

// fetch("").then(()=>{
//     console.log("Fetch done")
// }).then(()=>{}).then().catch()

// console.log("after")

// add()

// console.log("before")

// setTimeout(() => {
//     console.log("timeout")
// }, 1);

// console.log("after")

// setInterval(() => {
//     console.log("interval")
// }, 0);

// setTimeout(() => {
//     console.log("timeout")
// }, 1);

// setImmediate(() => {
//     console.log("Immediately")
// })

// const fs= require('fs')

// fs.readFile("test.txt", "utf8", function(){
//     setTimeout(() => {
//     console.log("timeout")   second
// }, 1);

// setImmediate(() => {
//     console.log("Immediately")   first
// })
// })


// setTimeout(() => {
//     console.log("timeout1")  //third
// }, 1);

// console.log("before tick")  //first

// process.nextTick(() => {
//     console.log("next tick")  //second
// })

// setTimeout(() => {
//     console.log("timeout2")  //fourth
// },1)


setTimeout(() => {
    console.log("timeout")  //second
},0)
process.nextTick(() => {
    console.log("next tick")  //first
})
setImmediate(() => {
    console.log("Immediately")   //third
})