// truthsy value: user are assumed that they are true.

const username = "r@raj.ai"

if (username) {
    console.log("Got the user name")
}
else {
    console.log("Please provide the username")
}

// falsy values
false, 0, -0, null, "", NaN, undefined, BigInt, 0n

//truthsy value
"0", 'false', " ", [], {}, function () { }

// Null Coalesing Operator ?? : null undefined

let val;
val = null ?? 10 // 10 will be assigned
console.log(val)