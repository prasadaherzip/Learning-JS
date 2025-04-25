let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(typeof myDate)

console.log("")

let myCreatedDate = new Date (2025,11,30)
console.log(myCreatedDate.toDateString())

console.log("")

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))        //roind down to seconds

console.log("")
console.log("TOdays date")
let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)\

// console.log(`${newDate.getDay()} and the time`)

newDate.toLocaleString('default',{
    weekday: "long"
    
})