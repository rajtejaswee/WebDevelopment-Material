// singleton
const obj1 = new Object()

// Object literals

const sym = Symbol("mykey1")
const obj2 = {
    name: "Raj",
    age: 21,
    [sym]: "key2"
}

console.log(obj1)
console.log(obj2)
// for accessing values
console.log(obj2["name"])
console.log(obj2.name)
console.log(typeof obj2[sym])

//to change the value
obj2.name = "Raj Tejaswee"
console.log(obj2)

//to freeze the value
//Object.freeze(obj2)
//obj1.name = "fbshfweoufuyee"
//console.log(obj2)

//to add function in the object
obj2.greetings = function () {
    console.log("Hello World!")
}

//to add the object value in the same function
obj2.greetingsTwo = function () {
    console.log(`Hello World, How are you ${this.name}`)
}

console.log(obj2.greetings())
console.log(obj2.greetingsTwo())

//Combining two objects in JS

let obj3 = {
    1: "A",
    2: "B",
    3: "C"
}
let obj4 = {
    4: "D",
    5: "E",
    6: "F"
}

let resulted_object = { obj3, obj4 }
/* Output
{
  obj3: { '1': 'A', '2': 'B', '3': 'C' },
  obj4: { '4': 'D', '5': 'E', '6': 'F' }
} */
console.log(resulted_object)
// to combine them we use
let real1 = Object.assign({}/* target object*/,/*Source Objects*/obj3, obj4)
let real2 = { ...obj3, ...obj4 }
console.log(real1)
console.log(real2)
/* Output
{ '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F' }
{ '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F' }
*/

//de-structure the object

const course = {
    courename: "JavaScript",
    price: "999",
    duration:"45 hours"
}

console.log(course.price) //if we want to use it many times then

const { price : amount} = course
console.log(amount)