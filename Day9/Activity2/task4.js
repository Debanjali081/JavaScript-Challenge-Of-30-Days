// Task 4 : Create a new li element and add to the existing ul list . 


let ul = document.querySelector('ul');

let li = document.createElement('li');

li.innerText = "Hello";
let ulElement = ul.appendChild(li);

document.body.appendChild(ulElement);
