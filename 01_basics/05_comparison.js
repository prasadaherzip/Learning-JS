
console.log(null>1)
console.log(null==0)
console.log(null>=0)

console.log(null===null)
console.log(undefined===null)   // === comparison of data types

console.log("2"===2)            //string and number 

/* avoid these conversions that might confuse */
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);