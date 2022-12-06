// Login Form Validation
const loginContainer = document.querySelector('.login-container');
const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const showPasswordIcon = document.querySelector('i.fa-eye');
const showRequestForm = document.querySelector('.reset-password');
const requestForm = document.querySelector('.form-request');
const requestEmail = document.getElementById('requestEmail');

showPasswordIcon.addEventListener('click', showPassword);

// *Show Hide Password
function showPassword() {
    if (loginPassword.type === 'password') {
        loginPassword.type = 'text';
        showPasswordIcon.style.color = 'red';
    } else {
        loginPassword.type = 'password';
        showPasswordIcon.style.color = '#ddd';
    }
}

// *Simple Validation
loginForm.addEventListener('submit', submitValidation);

function submitValidation(e) {
    e.preventDefault();
    let errors = [];
    // User name validation
    if (loginUsername.value === '' || loginUsername.value.length < 3 || loginUsername.value.length > 25) {
        //console.log('wrong username');
        showError(loginUsername, `User name can not be empty & length must be 3 - 25 characters!`);
        errors.push('Name error');
    } else {
        //console.log('username not empty');
        showSuccess(loginUsername);
    }
    // Password validation
    if (loginPassword.value === '' || loginPassword.value.length < 6 || loginPassword.value.length > 15) {
        //console.log('password empty');
        showError(loginPassword, `Password can not be empty & length must be 6 - 15 characters!`);
        errors.push('Password error');
    } else {
        //console.log('password not empty');
        showSuccess(loginPassword);
    }
    if (errors.length === 0) {
        location.href = 'send.html';
    }
}

// Clear field
loginUsername.addEventListener('focus', clearField);
loginPassword.addEventListener('focus', clearField);
requestEmail.addEventListener('focus', clearField);

function clearField() {
    let formField = this.parentElement;
    if (formField.className === 'form-field error') {
        let alertMessage = formField.querySelector('.alert-message');
        alertMessage.innerText = '';
        formField.className = 'form-field';
    }
}

// Show error Message
function showError(input, message) {
    const formField = input.parentElement;
    formField.className = 'form-field error';
    if ((formField.className === 'form-field error')) {
        const alertMessage = formField.querySelector('.alert-message');
        alertMessage.style.visibility = 'visible';
        alertMessage.style.color = 'red';
        alertMessage.innerText = message;
    }
}

// Show success Message
function showSuccess(input) {
    const formField = input.parentElement;
    formField.className = 'form-field success';
    if (formField.className === 'form-field success') {
        const alertMessage = formField.querySelector('.alert-message');
        alertMessage.style.visibility = 'hidden';
    }
}

// Request Form
requestForm.style.display = 'none';
showRequestForm.addEventListener('click', requestFormShow);

function requestFormShow(e) {
    e.preventDefault();
    if (requestForm.style.display !== 'block') {
        loginContainer.style.minHeight = '650px';
        requestForm.style.display = 'block';
    } else {
        requestForm.style.display = 'none';
        loginContainer.style.minHeight = 'initial';
    }
}

requestForm.addEventListener('submit', request);

function request(e) {
    e.preventDefault();
    let errors = [];
    if (requestForm.style.display === 'block' && (requestEmail.value === '' || requestEmail.value.indexOf('@gmail.com') === -1)) {
        showError(requestEmail, `Email can not be empty & must be gmail`);
        errors.push('Email error');
    } else {
        showSuccess(requestEmail);
    }
    if (errors.length === 0) {
        location.href = 'send.html';
    }
}