// DOM Manipulation is the get elements , change them , update them , delete them 
// geting elements 
// by ID
// by Class name
// by tag name
// queryselector
// queryselectorAll

// DOM Manipulation Properties
// tagName
// innerText
// innerHTML
// textContent  same as innerText but it also works for hidden elements
// <h1 style=" visibibility : hidden ">hello</h1>
// h1.innerText //output = ''
// h1.textContent //output = 'hello'


// performance.now() will give provide us a time span which is very accurate 
let t1 = performance.now();
let newELement = document.createElement('p');
newELement.textContent = "this is new para";
document.appendChild(newELement);
const t2 = performance.now();
console.log("this took time" + (t2-t1) + "ms");