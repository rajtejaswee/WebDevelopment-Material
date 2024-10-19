let person1 = "Raj Tejaswee";

function greetings() {
    console.log(`Hello ${person1}`) //person1 is taken from the declaration 
    var person2 = "Jon"
}

greetings();
console.log(person2, "Is the second Person")// this will give me an error since we can't access the variable from the outside but vice versa is true.