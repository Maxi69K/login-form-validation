/*
// Login Form Validation
const loginContainer = document.querySelector('.login-container');
const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const submitBtn = document.getElementById('submitBtn');
const loginPassword = document.getElementById('loginPassword');
const showPasswordIcon = document.querySelector('i.fa-eye');
const showRequestForm = document.querySelector('.reset-password');
const requestForm = document.getElementById('requestForm');
const requestEmail = document.getElementById('requestEmail');
const requestBtn = document.getElementById('requestBtn');

showPasswordIcon.addEventListener('click', showPassword);
loginForm.addEventListener('keyup', formValidation);
requestForm.addEventListener('keyup', requestValidation);
submitBtn.addEventListener('click', formValidation);
showRequestForm.addEventListener('click', requestFormShow);
requestBtn.addEventListener('click', requestValidation);
loginUsername.addEventListener('focus', clearField);
loginPassword.addEventListener('focus', clearField);
requestEmail.addEventListener('focus', clearField);

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

// Form validation
function formValidation() {
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
        submitBtn.addEventListener('click', sendForm);
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

// Clear field
function clearField() {
    let formField = this.parentElement;
    if (formField.className === 'form-field error') {
        let alertMessage = formField.querySelector('.alert-message');
        alertMessage.innerText = '';
        formField.className = 'form-field';
    }
}

// Send form
function sendForm() {
    loginForm.setAttribute('action', 'send.html');
}

// Request Form
requestForm.style.display = 'none';
function requestFormShow() {
    if (requestForm.style.display !== 'block') {
        loginContainer.style.minHeight = '650px';
        requestForm.style.display = 'block';
    } else {
        requestForm.style.display = 'none';
        loginContainer.style.minHeight = 'initial';
    }
}

function requestValidation() {
    let errors = [];
    if (requestForm.style.display === 'block' && (requestEmail.value === '' || requestEmail.value.indexOf('@gmail.com') === -1)) {
        showError(requestEmail, `Email can not be empty & must be gmail`);
        errors.push('Email error');
    } else {
        showSuccess(requestEmail);
    }
    if (errors.length === 0) {
        requestBtn.addEventListener('click', sendRequest);
    }
}

function sendRequest() {
    requestForm.setAttribute('action', 'send.html');
}
*/


// Login Form Validation
(function () {
    let loginFormValidation = {
        loginContainer: document.querySelector('.login-container'),
        loginForm: document.getElementById('loginForm'),
        loginUsername: document.getElementById('loginUsername'),
        submitBtn: document.getElementById('submitBtn'),
        loginPassword: document.getElementById('loginPassword'),
        showPasswordIcon: document.querySelector('i.fa-eye'),
        showRequestForm: document.querySelector('.reset-password'),
        requestForm: document.getElementById('requestForm'),
        requestEmail: document.getElementById('requestEmail'),
        requestBtn: document.getElementById('requestBtn'),
        init: function () {
            loginFormValidation.showPasswordIcon.addEventListener('click', loginFormValidation.showPassword);
            loginFormValidation.loginForm.addEventListener('keyup', loginFormValidation.formValidation);
            loginFormValidation.requestForm.addEventListener('keyup', loginFormValidation.requestValidation);
            loginFormValidation.submitBtn.addEventListener('click', loginFormValidation.formValidation);
            loginFormValidation.showRequestForm.addEventListener('click', loginFormValidation.requestFormShow);
            loginFormValidation.requestBtn.addEventListener('click', loginFormValidation.requestValidation);
            loginFormValidation.loginUsername.addEventListener('focus', loginFormValidation.clearField);
            loginFormValidation.loginPassword.addEventListener('focus', loginFormValidation.clearField);
            loginFormValidation.requestEmail.addEventListener('focus', loginFormValidation.clearField);
            loginFormValidation.requestForm.style.display = 'none';
        },
        showPassword: () => {
            if (loginFormValidation.loginPassword.type === 'password') {
                loginFormValidation.loginPassword.type = 'text';
                loginFormValidation.showPasswordIcon.style.color = 'red';
            } else {
                loginFormValidation.loginPassword.type = 'password';
                loginFormValidation.showPasswordIcon.style.color = '#ddd';
            }
        },
        formValidation: () => {
            let errors = [];
            if (loginFormValidation.loginUsername.value === '' || loginFormValidation.loginUsername.value.length < 3 || loginFormValidation.loginUsername.value.length > 25) {
                loginFormValidation.showError(loginFormValidation.loginUsername, `User name can not be empty & length must be 3 - 25 characters!`);
                errors.push('Name error');
            } else {
                loginFormValidation.showSuccess(loginFormValidation.loginUsername);
            }
            if (loginFormValidation.loginPassword.value === '' || loginFormValidation.loginPassword.value.length < 6 || loginFormValidation.loginPassword.value.length > 15) {
                loginFormValidation.showError(loginFormValidation.loginPassword, `Password can not be empty & length must be 6 - 15 characters!`);
                errors.push('Password error');
            } else {
                loginFormValidation.showSuccess(loginFormValidation.loginPassword);
            }
            if (errors.length === 0) {
                loginFormValidation.submitBtn.addEventListener('click', loginFormValidation.sendForm);
            }
        },
        showError: (input, message) => {
            const formField = input.parentElement;
            formField.className = 'form-field error';
            if ((formField.className === 'form-field error')) {
                const alertMessage = formField.querySelector('.alert-message');
                alertMessage.style.visibility = 'visible';
                alertMessage.style.color = 'red';
                alertMessage.innerText = message;
            }
        },
        showSuccess: input => {
            const formField = input.parentElement;
            formField.className = 'form-field success';
            if (formField.className === 'form-field success') {
                const alertMessage = formField.querySelector('.alert-message');
                alertMessage.style.visibility = 'hidden';
            }
        },
        clearField: function () {
            let formField = this.parentElement;
            if (formField.className === 'form-field error') {
                let alertMessage = formField.querySelector('.alert-message');
                alertMessage.innerText = '';
                formField.className = 'form-field';
            }
        },
        sendForm: () => loginFormValidation.loginForm.setAttribute('action', 'send.html'),
        requestFormShow: () => {
            if (loginFormValidation.requestForm.style.display !== 'block') {
                loginFormValidation.loginContainer.style.minHeight = '660px';
                loginFormValidation.requestForm.style.display = 'block';
            } else {
                loginFormValidation.requestForm.style.display = 'none';
                loginFormValidation.loginContainer.style.minHeight = 'initial';
            }
        },
        requestValidation: () => {
            let errors = [];
            if (loginFormValidation.requestForm.style.display === 'block' && (loginFormValidation.requestEmail.value === '' || loginFormValidation.requestEmail.value.indexOf('@gmail.com') === -1)) {
                loginFormValidation.showError(loginFormValidation.requestEmail, `Email can not be empty & must be gmail`);
                errors.push('Email error');
            } else {
                loginFormValidation.showSuccess(loginFormValidation.requestEmail);
            }
            if (errors.length === 0) {
                loginFormValidation.requestBtn.addEventListener('click', loginFormValidation.sendRequest);
            }
        },
        sendRequest: () => loginFormValidation.requestForm.setAttribute('action', 'send.html')
    };
    loginFormValidation.init();
})()