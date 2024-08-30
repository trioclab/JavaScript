// DOM have 4 pillars]
// 1: Selection of an Element
// 2: Changing the HTML
// 3: Changing the CSS
// 4: Event listner


// pillar 1
// let heading = document.querySelector("#box");
// pillar 2
// heading.innerHTML = "Change";
// pillar 3
// heading.style.color = "pink";
// heading.style.backgroundColor = "yellow";
// pillar 4
// addeventlistener is a higher order function



let bulb = document.querySelector("#bulb");
let button = document.querySelector("#button");
let background = document.querySelector("#wrapper")
let variable = 0;
button.addEventListener("click", function(){
    if(variable == 0){
        bulb.style.backgroundColor = "yellow";
        bulb.style.boxShadow = "0 0 50px 20px yellow";
        background.style.backgroundColor = "rgb(100, 163, 185)";
        button.innerText = "Day";
        variable = 1;
    }else{
        bulb.style.backgroundColor = "white";
        bulb.style.boxShadow = "0 0 0 0";
        background.style.backgroundColor = "black";
        button.innerText = "Night";
        variable = 0;
    }
})
// -----------------------------------------------------------------------------------------------------

// if you want to select multiple elements with the same tag they have ,then querySelector will only take the first element with the tag name , at this place you can use :   "querySelectorAll" it will save the all the elements in the nodelist which is quite similar to array here is a example :

// let paragraphs = document.querySelectorAll("p");

// console.log(paragraphs);

// // or we can use for each function

// paragraphs.forEach(function(e){
//     console.log(e);  // it will show the elements which have tag p 

// })


// -----------------------------------------------------------------------------------------------------
// Differentiate between textContent and innerHTML
// textContent just provide the data in the text form like change the html only provide their text
// meanwhile inerHTML provide the proper element in the html document   