const mySym = Symbol("key1");

const jsUser = {
    name: "Prasad",
    "fullname": "Prasad Aher",       // when the key is a "string": value
    age: 18,
    [mySym]: "myKey1",
    location: "Mumbai",
    email: "prasad@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"],
};

/* Access elements of an object */

console.log(jsUser.email);           // object.key, dot notation
console.log(jsUser["email"]);        // object["key"], square bracket notation

console.log("")

console.log(jsUser["fullname"]);     // Corrected missing closing parenthesis

/* Accessing a symbol key from an object */

console.log(jsUser[mySym]);           
/* manipulating values in an object */

jsUser.email = "prasad@chatgpt.com";    // changing the value of a key
// Object.freeze(jsUser);                  // Capital "O" needed in Object
jsUser.email = "prasad@microsoft.com";  // won't change because object is frozen
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);     //using string interpolation to call a key from an object
}


console.log(jsUser.greeting());
console.log(jsUser.greeting2());