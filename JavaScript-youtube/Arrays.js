//Arrays

const ar = [1, 2, 3, 4, 5]
const myHeros = ["Batman", "Superman", "Spiderman"]
const arr = new Array(1, 5, 3, 6, 2, 4)
console.table([ar, myHeros, arr])

// Array Methods 
let length = [ar.length, myHeros.length, arr.length]
console.log(length) // [ 5, 3, 6 ]

ar.push(6)
ar.push(7)
console.log(ar) //[1, 2, 3, 4,5, 6, 7]
ar.pop()
ar.pop()
console.log(ar) // [ 1, 2, 3, 4, 5 ]

// unshift(parameter) --> to add value at the first index and shift all the elements
// shift --> just removes the first element from the array.

// includes to check the element(return true or false)
// index of to return the index of the array element

//splice, slice

const A = [0, 1, 2, 3, 4, 5, 6]
console.log("A " + A)

const newArray1 = A.slice(1, 3)
console.log(newArray1)
console.log("B " + A)

const newArray2 = A.splice(1, 3)
console.log(newArray2)
console.log("C " +A)

// Output 
/* 
A 0,1,2,3,4,5,6
[ 1, 2 ]
B 0,1,2,3,4,5,6
[ 1, 2, 3 ]
C 0,4,5,6 */

// Spread 

const marvel_heros = ["Spiderman", "Hulk", "Thor"]
const dc_heros = ["Batman", "flash", "Superman"]

const all_heros = [...marvel_heros, ...dc_heros] // concat can also be used
console.log(all_heros) // [ 'Spiderman', 'Hulk', 'Thor', 'Batman', 'flash', 'Superman' ]

const new_array = [1, 2, 4, 3, [3, 4, 5], 6, 4, [4, 3, [4, 5, 8]]]
const real_array = new_array.flat(Infinity)
console.log(new_array) // [ 1, 2, 4, 3, [ 3, 4, 5 ], 6, 4, [ 4, 3, [ 4, 5, 8 ] ] ]
console.log(real_array) // [1, 2, 4, 3, 3, 4,5, 6, 4, 4, 3, 4,5, 8]

// Checking and converting the array

console.log(Array.isArray("Raj Tejaswee")) // false
console.log(Array.from("Raj Tejaswee")) // ['R', 'a', 'j', ' ','T', 'e', 'j', 'a','s', 'w', 'e', 'e']

// for objects it return an empty array since we have to justify either we have to convert the key or the value

let a = 233;
let b = 456
let c = 245

console.log(Array.of(a, b, c)) // [ 233, 456, 245 ]
  
