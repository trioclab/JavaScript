let incrementBtn = document.getElementById('button+');
let decrementBtn = document.getElementById('button-');
let numberField = document.getElementById('numbers');

incrementBtn.addEventListener('click', ()=>{
    number = parseInt(numberField.textContent) 
    numberField.textContent = number + 1
});

decrementBtn.addEventListener('click', ()=>{
    number = parseInt(numberField.textContent) 
    numberField.textContent = number - 1
});
 