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