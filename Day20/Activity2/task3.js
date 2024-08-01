// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('userInfo', JSON.stringify({ name, email }));
    displayUserData();
  });
  
  function displayUserData() {
    const data = JSON.parse(localStorage.getItem('userInfo'));
    if (data) {
      document.getElementById('userData').innerText = `Name: ${data.name}, Email: ${data.email}`;
    }
  }
  
  document.addEventListener('DOMContentLoaded', displayUserData);
  