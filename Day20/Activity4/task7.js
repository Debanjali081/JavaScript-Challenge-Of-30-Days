// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.


document.getElementById('sessionUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('sessionName').value;
    const email = document.getElementById('sessionEmail').value;
    sessionStorage.setItem('sessionUserInfo', JSON.stringify({ name, email }));
    displaySessionUserData();
  });
  
  function displaySessionUserData() {
    const data = JSON.parse(sessionStorage.getItem('sessionUserInfo'));
    if (data) {
      document.getElementById('sessionUserData').innerText = `Name: ${data.name}, Email: ${data.email}`;
    }
  }
  
  document.addEventListener('DOMContentLoaded', displaySessionUserData);
  