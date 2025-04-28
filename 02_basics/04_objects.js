const tinderUser ={
    name : "prasad aher",
    id:1234,
    isLoggedIn:false,
}

tinderUser.email="prasad@microsoft.com"

console.log(tinderUser)
console.log("")

/* object nesting */

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"prasad",
            lastname:"aher"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)    //specific value access in a nested object
/* console.log(regularUser.fullname?.userfullname.firstname) */   //if "key" exists,, continue with next step

/* Combining Objects */

const obj1={1:"a", 2:"b"}
const obj2={3:"c",4:"d"}

const obj3 ={...obj1, ...obj2}         //using spread to combine 2 objects
console.log(obj3)

const users=[
    {
        id:1
        email:"p@gmai.com"
    },

]

users[1].email