const parent = document.querySelector('.parent');
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);   
}
// changing the styling of the children
parent.children[1].style.color = 'red'

// creating an element

const div = document.createElement('div')
console.log(div)
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1);
// override the text node might be slow 
div.innerText = "Friday"
//alternative could be using a div.create.textnode
div.style.color = 'green'
div.setAttribute('title', 'generated title')

// appending it with the body

document.body.appendChild(div)

// adding a language with a function

function addLanguage(langName) {
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.language')
    append.appendChild(li)
}
addLanguage("python")
addLanguage("Java")