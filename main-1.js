/**
 * 1. what is dom
 * 
 * 2. what is nodes and type of nodes
 * 
 * 3. selecting elements using DOM
 * 
 *  1. getElementById()
 *  2. getElementByName()
 *  3. getElementByTagName()
 *  4. getElementByClassName()
 *  5. querySelector()
 *  6. querySelectorAll()
 * 
 * 4. Tranversing element
 * 
 *  1. selecting parent element
 *  2. selecting child element
 *  3. selecting sibling elements
 * 
 * 5. Manipulating HTML elements
 * 
 * createElement()
 * appendChild()
 * textContent
 * innerHtml
 * after()
 * append()
 * prepend()
 * insertAdjacentHTML()
 * replaceChild()
 * cloneNode()
 * removeChild()
 * insertBefore()
 * 
 * 6. Attribute methods
 * 
 * getAttribute()
 * setAttribute()
 * hasAttribute()
 * removeAttribute()
 * 
 * 7. Manipulating Element's Style
 * 
 * style property
 * cssText
 * getComputedStyle()
 * classNameProperty
 * classList property
 * 
 * 8. javascript event
 * 
 * what is event
 * event bubbling & event capturing
 * event handler in HTML attributes
 * DOM level 0 event handlers
 * addEventListener()
 * event objects
 * different types of event
*/


/**
 * 3. selecting elements using DOM
 * 
 *  1. getElementById()
 *  2. getElementByName()
 *  3. getElementByTagName()
 *  4. getElementByClassName()
 *  5. querySelector()
 *  6. querySelectorAll()
 */
// using getElementById
let msgId = document.getElementById('msg')
console.log(msg);

// using getElementByName | this return node list of two array ie nodeList
let msgName = document.getElementsByName('lang')

// using getElementByTagName
let tagName = document.getElementsByTagName('h3')

// using etElementByClassName which returns HTMLcollections
let className = document.getElementsByClassName('clss-name')
let nestedClassId = document.getElementById('nested-id')
let nestClass = nestedClassId.getElementsByClassName('class-name')

// using document.querySelector document.querySelectorAll
let queryId = document.querySelector('#get-name')
let queryClass = document.querySelector('.name')

let queryAll = document.querySelectorAll('.name')

// document.querySelectorAll(div, h2) it will select all the div with h2 in the document
// we can have h1, h2, p, input, button, all the css element can be passed, we can pass anything,

let queryAll2 = document.querySelectorAll('div h1');

/**
* 4. Tranversing element
*
*  1. selecting parent element
*  2. selecting child element
*  3. selecting sibling elements
*
 */
// 1. selecting parent element

let txt = document.querySelector('.txt')
// to know the parent node where the txt class belongs to
// to return the parent of txt class => txt.parentNode
// to return first and last element
// getting child element of a Node in js
console.log(txt.parentNodes);
let parent = document.querySelector(".title");
// parent.firstElementChild
// lastElement.lastElementChild
// parent.childNodes //this return everything from the parent element 

// selecting from next siblings
// let nextSibling = document.querySelector(".sibling");
// nextSibling.nextElementSibling
// nextSibling.previousElementSibling


/* 5. Manipulating HTML elements
* 
* createElement()
* appendChild()
* textContent
* innerHtml
* after()
* append()
* prepend()
* insertAdjacentHTML()
* replaceChild()
* cloneNode()
* removeChild()
* insertBefore()
*/
let div = document.createElement("div")
    div.innerHTML = "<p>welcome to my dom page</p>"
    document.body.appendChild(div);
    // adding id or class to the newly created div
    div.id = "title";
    div.className = "title";

    // appendChild: addig an element to the last node list
    let menu = document.getElementById("menu");
    let list = document.createElement("li");
    list.innerHTML = "Contact";
    menu.appendChild(list);
    
// * 6. Attribute methods
// * 
// * getAttribute()
// * setAttribute()
// * hasAttribute()
// * removeAttribute()
// * 
// * 7. Manipulating Element's Style
// * 
// * style property
// * cssText
// * getComputedStyle()
// * classNameProperty
// * classList property
// * 
// * 8. javascript event
// * 
// * what is event
// * event bubbling & event capturing
// * event handler in HTML attributes
// * DOM level 0 event handlers
// * addEventListener()
// * event objects
// * different types of event
