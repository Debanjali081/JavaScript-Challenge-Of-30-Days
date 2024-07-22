// Task 9 : Add a click event listner to a list that logs the text content of the clicked list item using event delegation .

document.addEventListener('DOMContentLoaded', (event) => {
    const list = document.getElementById('myList');

    list.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === 'LI') {
            console.log('Clicked list item text:', e.target.textContent);
        }
    });
});
