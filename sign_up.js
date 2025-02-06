// Get form and input elements
const form = document.querySelector('#signupForm');
const fullNameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');

// Error message display function
function showError(input, message) {
    const formControl = input.parentElement;
    let errorDiv = formControl.querySelector('.error-message');
    
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        formControl.appendChild(errorDiv);
    }
    
    errorDiv.textContent = message;
    input.style.borderColor = 'red';
}

// Success styling function
function showSuccess(input) {
    const formControl = input.parentElement;
    const errorDiv = formControl.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
    input.style.borderColor = 'green';
}

// Validate full name
function validateFullName() {
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
    const fullName = fullNameInput.value.trim();
    
    if (fullName === '') {
        showError(fullNameInput, 'Full name is required');
        return false;
    } else if (!nameRegex.test(fullName)) {
        showError(fullNameInput, 'Please enter your first and last name');
        return false;
    } else {
        showSuccess(fullNameInput);
        return true;
    }
}

// Validate email
function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value.trim();
    
    if (email === '') {
        showError(emailInput, 'Email is required');
        return false;
    } else if (!emailRegex.test(email)) {
        showError(emailInput, 'Please enter a valid email address');
        return false;
    } else {
        showSuccess(emailInput);
        return true;
    }
}

// Validate username
function validateUsername() {
    const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
    const username = usernameInput.value.trim();
    
    if (username === '') {
        showError(usernameInput, 'Username is required');
        return false;
    } else if (!usernameRegex.test(username)) {
        showError(usernameInput, 'Username must be 4-20 characters and can only contain letters, numbers, and underscores');
        return false;
    } else {
        showSuccess(usernameInput);
        return true;
    }
}

// Validate password
function validatePassword() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const password = passwordInput.value;
    
    if (password === '') {
        showError(passwordInput, 'Password is required');
        return false;
    } else if (!passwordRegex.test(password)) {
        showError(passwordInput, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
        return false;
    } else {
        showSuccess(passwordInput);
        return true;
    }
}

// Validate confirm password
function validateConfirmPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    if (confirmPassword === '') {
        showError(confirmPasswordInput, 'Please confirm your password');
        return false;
    } else if (password !== confirmPassword) {
        showError(confirmPasswordInput, 'Passwords do not match');
        return false;
    } else {
        showSuccess(confirmPasswordInput);
        return true;
    }
}

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting by default

    const isFullNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    
    if (isFullNameValid && isEmailValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid) {
        // All validations passed, you can proceed with form submission
        console.log('Form is valid, proceeding with submission');
        
        // Redirect to index.html after successful validation
        window.location.href = 'index.html';
    }
});
