const jsUser={
    name:"Prasad",
    age:18,
    location:"Mumbai",
    email:"prasad@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Tuesday"],

}

console.log("")

/* access elements of an object*/

console.log(jsUser.email)           //object.key, dot notation
console.log(jsUser["email"])        //object["key"], square notation

const JsUser2={
    "fullname":"Prasad Aher"        //when the key is a "string":value
}

console.log(JsUser2["fullname"])

console.log("")

/* Using a symbol data type as a key*/

const mySym = Symbol("key1")
const jsUser3 = {
    mySym: "myKey1"
}

console.log(jsUser3.mySym)
console.log(typeof(jsUser3.mySym))      //symbol data types accessed as a string

//revised
const jsUser4 = {
    [mySym]: "myKey1"
}

console.log(jsUser4[mySym])
console.log(typeof(jsUser4[mySym]) 

/* back to top */

jsUser.email= "prasad@chatgpt.com"           //changing the values of a key in the objects
object.freeze(jsUser)
jsUser.email= "prasad@microsoft.com"
console.log(jsUser)

