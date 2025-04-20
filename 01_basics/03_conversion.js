let score =33

console.log(typeof score)           //is a number datatype

let score1 = "33"

console.log(score1)
console.log(typeof score1)          // here 33 is a string

let score3="33abc"

console.log(typeof score3)          //is a string


let valueInNumber = Number(score3)  //comverting a string to a number datatype
console.log(typeof valueInNumber)   //returns a number even though 33abc is not a complete number
console.log(valueInNumber)          // returns NaN (not a number)

let score4 = true

console.log(typeof score4)
console.log(score4)

let valInNo= Number(score4)
console.log(valInNo)                //returns a zero


// "33" => 33
//"33abc" => NaN
// true => 1: false => 0

/* converting number to boolean */

let isLoggedIn = 0

let val1 = Boolean(isLoggedIn)
console.log(val1)

/* converting string to boolean */

let isLogged = "abhsdbhsdf"

let val2 = Boolean(isLogged)
console.log(val2)                 

/*

1 = true 0 = false
"prasad"= true
"" = false

*/

let anumber = 45

let val3= Number(anumber)
console.log(val3)
console.log(typeof val3)