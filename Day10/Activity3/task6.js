let input = document.querySelector('input');

let p = document.querySelector('p');

input.addEventListener('keyup', () => {
    p.innerText = "I am Current";
})