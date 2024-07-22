// Task 7 : Add a submit event listner to a form that prevents the default submission and log the form data to the console .

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const formObject = {};

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log('Form Data:', formObject);
    });
});
