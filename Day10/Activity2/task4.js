// Task 4 : Add a mouseover event listner to an element that resets its background color .

let box = document.querySelector('.box');

box.addEventListener('mouseover', () => {
    box.style.backgroundColor = "red";
})