const marvel = ["thor", "ironman", "spiderman"]
const dcHeroes = ["superman","flash","batman"]

marvel.push(dcHeroes)       //pushed the array and the 3rd element in marvel array
console.log(marvel)
console.log(marvel[3][1])   //access 1st element of deheroes array in 3rd elemnt of marvel array


let newArr = marvel.concat(dcHeroes)            //combines 2 arrays and returns a new array
console.log(newArr);


const allNewHeroes = [...marvel, ...dcHeroes]   //spread 2 arrays (llly to combining arrays)
console.log(allNewHeroes)

console.log("")
console.log("Using flat() to remove subarrays")
console.log("")

const Arr1=[1,2,3,[5,3,1],7,[7,8,[9,3]]]
const Arr2 = Arr1.flat(Infinity)
console.log(Arr2)

console.log(Array.isArray("Hitesh"))        //is it an array? (boolean)
console.log(Array.from("Hitesh"))           //converts an array of the given string or objcets
console.log(Array.from({name:"hitesh"}))    //gives an empty array ""imp for interviews""

console.log("")

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

/*end*/
