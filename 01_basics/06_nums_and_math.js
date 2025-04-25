console.log("---Numbers Section---")
const score = 400
console.log(score)

const balance = new Number(100)         //specify a numbe rto be a datatype of number only
console.log(balance);

console.log(balance.toString().length); //length of string
console.log(balance.toFixed(2));        //precision of fraction digits

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());         //USA format
console.log(hundreds.toLocaleString('en-IN'))   //Indian FOrmat

console.log("///---Math Section---///")
console.log("")

/* MATHS */

console.log(Math)
console.log(Math.abs(-4))       //absolute
console.log(Math.round(4.3))    
console.log(Math.ceil(4.1))     //round up
console.log(Math.floor(4.9))    //round down

console.log(Math.random())          //random value between 0 & 1
console.log(Math.random()*10)       //multiply by 10 
console.log(Math.random()*10+1);    //add 1 so there is no 0 value
console.log((Math.random()*10) +1); //always gives more than 1 or 1
console.log("")

/* ---Min Max--*/

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)