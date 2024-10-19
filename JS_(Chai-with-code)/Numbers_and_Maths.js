const num2 = 98
console.log(num2.toFixed(2));
// output: 98.00


const num = 100000
console.log(num.toLocaleString('en-IN'))
// output: 1,00,000

const num1 = 123.894
console.log(num1.toPrecision(4))
// output: 123.9

/* +++++++++++++++ Maths +++++++++++++++ */
// generating a random value in the given range using random math function

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)