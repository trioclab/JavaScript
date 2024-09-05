let rectangle = document.querySelector("#rectangle");


rectangle.addEventListener("mousemove",function(){
    // location of the rectangle on the webpage
         console.log(rectangle.getBoundingClientRect())
})