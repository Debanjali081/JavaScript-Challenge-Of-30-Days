//  Task 9 : Add a click event listner to a button that changes the text content of a paragraph .

let btn = document.querySelector('button');

let p = document.querySelector('p');

btn.addEventListener('click', () => {
    p.innerText = "Am Final Text";
})


btn.addEventListener('dblclick', () => {
    p.innerText = "Am Initial Text";
})