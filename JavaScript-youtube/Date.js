const date = new Date()
console.log(date) //2024-10-19T20:28:59.894Z
console.log(date.toString()) //Sun Oct 20 2024 02:00:15 GMT+0530 (India Standard Time)
console.log(date.toDateString()) //Sun Oct 20 2024
console.log(date.toLocaleString())//10/20/2024, 2:00:15 AM


let myDate = new Date("2023-01-23")
console.log(myDate.toLocaleString()) //1/23/2023, 5:30:00 AM
console.log(myDate.getDay())

let timeStamp = myDate.getTime()
//time in sec from 2023-02-13 to now
console.log(Math.floor(timeStamp/1000)) //1674432000