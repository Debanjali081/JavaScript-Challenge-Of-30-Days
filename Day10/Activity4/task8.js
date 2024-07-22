// Task 8 : Add a change event listner to a select dropdown that displays selected value in a paragraph .

document.addEventListener('DOMContentLoaded', (event) => {
    const dropdown = document.getElementById('dropdown');
    const display = document.getElementById('display');

    dropdown.addEventListener('change', function() {
        const selectedValue = dropdown.value;
        display.textContent = `Selected value: ${selectedValue}`;
    });
});
