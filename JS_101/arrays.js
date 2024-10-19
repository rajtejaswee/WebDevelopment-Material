let lst = [1, 3, 7, 9, 7, 3]
console.log(lst);
console.log(typeof (lst))

lst.push("new item")
console.log(lst)

//iteratiom
// Syntax: for (something: as long as something else; after each iteration)

//simple for loop
const arr = ["Zero", "One", "Two", "Three"] 
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//forEach loop
arr.forEach(num => {
    console.log(num);
});