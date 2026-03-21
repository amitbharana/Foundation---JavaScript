// Primitive

// 7 types : string, number, Boolearn, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// false

const bigNumber = 23365778163823647n

// Reference (Non primitive)

// Array,  objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Amit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId)

//symbol

//++++++++++++++++++++++++++++++++++++++++++++++++

//stack (primitive), Heap (Non-primitive)

let myYoutubename = "amitbharana"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

//amitbharana
//chaiaurcode

let userOne = {
    email: "amit@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "amit@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//amit@google.com
//amit@google.com