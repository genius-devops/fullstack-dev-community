/**
 * How to Listen to DOM Events
 * The event type to listen to
 * A function to run when the event is triggered
 * element.addEventListiner(type, function)
 * 
*/




const button = document.getElementsByTagName("button");
button[0].addEventListener("keydown", () => {
  console.log("you clicked me!");
});

const textInput = document.querySelector(".text-input");
const btn = document.querySelector(".btn-enter");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  console.log("Hi you clicked me!");
});

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(textInput.value));
  ul.appendChild(li);
});


// listening to an input, enter event 
const textInput = document.querySelector('.text-input')
const btnEnter = document.querySelector('.btn-enter')
const ul = document.querySelector('ul')

btnEnter.addEventListener('click', () => {
    const li = document.createElement('li');
    // li.textContent = 'adams' // adding adams or
    li.appendChild(document.createTextNode('salad'))
    ul.appendChild(li)
})

// taking event of button using html collection
const btn = document.getElementsByTagName('button')

// using click event
btn[0].addEventListener('click', () => {
    console.log('you click me')
})







// using mouseEnterEvent
btn[0].addEventListener('mouseenter', () => {
    console.log('you click me')
})

// using mouseLeave
btn[0].addEventListener('mouseleave', () => {
    console.log('you click me')
})

// using mouseHover
btn[0].addEventListener('mouseover', () => {
    console.log('you click me')
})

// using mouseUp
btn[0].addEventListener('mouseenter', () => {
    console.log('you click me')
})

// double click event
btn[0].addEventListener('dblclick', () => {
    console.log('you click me')
})

btn[0].addEventListener('mouseEnter', () => {
    console.log('you click me')
})
