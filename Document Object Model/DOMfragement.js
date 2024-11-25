
let fragement = document.createDocumentFragment();
let object = document.createElement('div');

for(let i = 0 ; i <= 100 ; i++){
    let div = document.createElement('p');
    div.innerText =  `its paragraph no${i}.`;
    object.appendChild(div);
    fragement.appendChild(object);
}
document.body.appendChild(fragement); //single reflow and repaint 