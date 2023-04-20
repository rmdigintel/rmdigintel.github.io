// JavaScript code for login page

const loginForm = document.getElementById("login-form");
const personalDataForm = document.getElementById("personal-data-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Mock data for login and password
  const mockUsername = "user123";
  const mockPassword = "password123";

  // Check if input values match mock data
  if (username === mockUsername && password === mockPassword) {
    // Successful login
    alert("Login successful!");

    // Hide login form and show personal data form
    loginForm.style.display = "none";
    personalDataForm.style.display = "block";
  } else {
    // Failed login
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerText = "Invalid username or password. Please try again.";
  }
});

const dataForm = document.getElementById("data-form");

dataForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get input values
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Validate and save personal data
  if (fullName && email && phone) {
    // Mock API call to save data
    alert("Personal data saved successfully!");
  } else {
    // Show error message
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerText = "Please fill in all fields.";
  }
});
