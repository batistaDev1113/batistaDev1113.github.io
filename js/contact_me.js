
// event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('message').addEventListener('blur', validateTextArea);

// input variables
const inputName = document.querySelector('input#name');
const inputEmail = document.querySelector('input#email');
const inputPhone = document.querySelector('input#phone');
const inputText = document.querySelector('textarea#message');

// validate name
const name = document.getElementById('name');
function validateName() {
  const re = /^([a-zA-Z .]{2,15})\s([a-zA-Z]{2,20}) *$/;

  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

// validate email
const email = document.getElementById('email');
function validateEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

// validate phone
const phone = document.getElementById('phone');
function validatePhone() {
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

// make sure message is not empty
const text = document.getElementById('message');
function validateTextArea() {
  if (text.value == '') {
    text.classList.add('is-invalid');
  } else {
    text.classList.remove('is-invalid');
  }
}

const btnSubmit = document.getElementById('sendMessageButton');
const classCheck = document.body.getElementsByClassName('is-invalid');

// check for empy input or 'is-invalid' error class
function validateForm() {
  if (classCheck.length >= 1 || inputName.value == '' || inputEmail.value == '' || inputPhone.value == '' || inputText.value == '') {
    event.preventDefault();
    validateName();
    validateEmail();
    validatePhone();
    validateTextArea();

  }
}