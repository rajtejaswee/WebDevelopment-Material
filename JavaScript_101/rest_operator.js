function addNumbers(...numbers) {
    let total = 0;
    for (index in numbers) {
        total = total + numbers[index];
    }
    return total;
}

console.log(addNumbers(1, 3, 4, 5, 5, 6, 7))
console.log(addNumbers(1,3,5))