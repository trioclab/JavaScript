let enteredValue = document.querySelector('#input-field');
let Save = document.querySelector('#SaveBtn');
let ListField = document.querySelector('#list-field');
Save.addEventListener('click', ()=>{
    // let newElement = document.createElement('li');
    // newElement.textContent = enteredValue.value;
    // ListField.appendChild(newElement);
    console.log(enteredValue.value);
})
let arr = ["text", "value", "label", "value"];
arr.forEach(value => {
    console.log(value);
});