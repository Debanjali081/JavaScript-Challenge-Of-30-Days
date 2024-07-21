// Task 10 : Add a mouseover event listner to an element that changes its border color.

let card = document.querySelector('.card p');
card.style.border = "2px solid red";

card.addEventListener('mouseover', () => {
    card.style.border = "2px solid blue";
})
