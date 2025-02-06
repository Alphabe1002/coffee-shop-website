// Get form and input elements
const form = document.querySelector('#signupForm');
const fullNameInput = document.querySelector('input[placeholder="FULL NAME"]');
const emailInput = document.querySelector('input[placeholder="EMAIL"]');
const usernameInput = document.querySelector('input[placeholder="USERNAME"]');
const passwordInput = document.querySelector('input[placeholder="PASSWORD"]');
const confirmPasswordInput = document.querySelector('input[placeholder="CONFIRM PASSWORD"]');

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
function validateFullName(input) {
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/;
    const fullName = input.value.trim();
    
    if (fullName === '') {
        showError(input, 'Full name is required');
        return false;
    } else if (!nameRegex.test(fullName)) {
        showError(input, 'Please enter your first and last name');
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

// Validate email
function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = input.value.trim();
    
    if (email === '') {
        showError(input, 'Email is required');
        return false;
    } else if (!emailRegex.test(email)) {
        showError(input, 'Please enter a valid email address');
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

// Validate username
function validateUsername(input) {
    const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/;
    const username = input.value.trim();
    
    if (username === '') {
        showError(input, 'Username is required');
        return false;
    } else if (!usernameRegex.test(username)) {
        showError(input, 'Username must be 4-20 characters and can only contain letters, numbers, and underscores');
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

// Validate password
function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const password = input.value;
    
    if (password === '') {
        showError(input, 'Password is required');
        return false;
    } else if (!passwordRegex.test(password)) {
        showError(input, 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

// Validate confirm password
function validateConfirmPassword(passwordInput, confirmInput) {
    const password = passwordInput.value;
    const confirmPassword = confirmInput.value;
    
    if (confirmPassword === '') {
        showError(confirmInput, 'Please confirm your password');
        return false;
    } else if (password !== confirmPassword) {
        showError(confirmInput, 'Passwords do not match');
        return false;
    } else {
        showSuccess(confirmInput);
        return true;
    }
}

// Real-time validation
fullNameInput.addEventListener('input', () => validateFullName(fullNameInput));
emailInput.addEventListener('input', () => validateEmail(emailInput));
usernameInput.addEventListener('input', () => validateUsername(usernameInput));
passwordInput.addEventListener('input', () => validatePassword(passwordInput));
confirmPasswordInput.addEventListener('input', () => validateConfirmPassword(passwordInput, confirmPasswordInput));

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting by default

    const isFullNameValid = validateFullName(fullNameInput);
    const isEmailValid = validateEmail(emailInput);
    const isUsernameValid = validateUsername(usernameInput);
    const isPasswordValid = validatePassword(passwordInput);
    const isConfirmPasswordValid = validateConfirmPassword(passwordInput, confirmPasswordInput);
    
    if (isFullNameValid && isEmailValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid) {
        // All validations passed, you can proceed with form submission
        console.log('Form is valid, proceeding with submission');
        
        // Redirect to index.html after successful validation
        window.location.href = 'index.html';
    }
});
