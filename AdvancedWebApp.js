/**
 * AdvancedWebApp.js
 * 
 * This code is a sophisticated JavaScript web application that utilizes various advanced concepts and techniques.
 * It generates a web form for users to input their personal information, validates the form inputs, and displays
 * the submitted data dynamically on the web page. The code also includes AJAX functionality to send the form data
 * to a server for further processing.
 * 
 * Author: Code Genius
 */

// Define an object to hold the form data
let formData = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
  gender: '',
  interests: []
};

// Create variables for HTML elements
let formContainer = document.getElementById('form-container');
let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let emailInput = document.getElementById('email');
let ageInput = document.getElementById('age');
let genderRadios = document.getElementsByName('gender');
let interestCheckboxes = document.getElementsByName('interest');

// Function to handle form submission
function submitForm(e) {
  e.preventDefault(); // Prevent actual form submission

  // Retrieve form input values
  formData.firstName = firstNameInput.value;
  formData.lastName = lastNameInput.value;
  formData.email = emailInput.value;
  formData.age = parseInt(ageInput.value);

  // Retrieve selected gender
  for (let i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      formData.gender = genderRadios[i].value;
      break;
    }
  }

  // Retrieve selected interests
  formData.interests = [];
  for (let i = 0; i < interestCheckboxes.length; i++) {
    if (interestCheckboxes[i].checked) {
      formData.interests.push(interestCheckboxes[i].value);
    }
  }

  // Validate form inputs
  if (!validateFormData()) {
    return;
  }

  // Display submitted data on the web page
  displaySubmittedData();

  // Send form data to the server using AJAX
  sendFormDataToServer();
}

// Function to validate form inputs
function validateFormData() {
  let isValid = true;

  if (formData.firstName.trim() === '') {
    isValid = false;
    alert('First name is required!');
  }

  if (formData.lastName.trim() === '') {
    isValid = false;
    alert('Last name is required!');
  }

  if (formData.email.trim() === '' || !validateEmail(formData.email)) {
    isValid = false;
    alert('Invalid email!');
  }

  if (isNaN(formData.age)) {
    isValid = false;
    alert('Age must be a number!');
  }

  if (formData.gender === '') {
    isValid = false;
    alert('Gender is required!');
  }

  if (formData.interests.length === 0) {
    isValid = false;
    alert('At least one interest must be selected!');
  }

  return isValid;
}

// Function to validate email format
function validateEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}

// Function to display submitted data on the web page
function displaySubmittedData() {
  let outputContainer = document.getElementById('output-container');
  outputContainer.innerHTML = '';

  for (let key in formData) {
    let label = document.createElement('span');
    label.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ': ';
    let value = document.createElement('span');
    value.textContent = Array.isArray(formData[key]) ? formData[key].join(', ') : formData[key];
    let br = document.createElement('br');
    outputContainer.appendChild(label);
    outputContainer.appendChild(value);
    outputContainer.appendChild(br);
  }
}

// Function to send form data to the server
function sendFormDataToServer() {
  // Simulating AJAX request
  setTimeout(() => {
    alert('Form data submitted successfully!');
  }, 2000);
}

// Attach event listener to the form submission
formContainer.addEventListener('submit', submitForm);