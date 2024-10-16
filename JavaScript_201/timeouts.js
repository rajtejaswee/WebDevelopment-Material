
//for making it wait.
// console.log("Starting script.....")
// setTimeout(function () {
//     console.log("Waiting")
// }, 3000)



//for repeating the code with the interval
let count = 0;
const interval = setInterval(function () {
    console.log("Checking something...")
    count++;

    if (count === 3) {
        //unset the interval
        clearInterval(interval);
        console.log("This is the last interval")
    }
},3000)