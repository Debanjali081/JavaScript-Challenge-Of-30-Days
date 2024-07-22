// Task 10 : Add an event listner to a parent element that listens from dynamically added child element .

document.addEventListener('DOMContentLoaded', (event) => {
    const parent = document.getElementById('parent');
    const addChildButton = document.getElementById('addChild');

    // Event listener on parent element to handle events from child elements
    parent.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('child')) {
            console.log('Clicked child element text:', e.target.textContent);
        }
    });

    // Add new child elements dynamically
    addChildButton.addEventListener('click', function() {
        const newChild = document.createElement('div');
        newChild.className = 'child';
        newChild.textContent = 'I am a new child element';
        parent.appendChild(newChild);
    });
});
