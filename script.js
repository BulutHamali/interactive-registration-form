// Grab the form and all input fields by their IDs
const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Grab the corresponding <span> elements for error messages
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Run validation functions whenever the user types into the fields
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

// This function shows an error message and adds a red border to the input
function showError(input, message, errorSpan) {
    errorSpan.textContent = message;
    input.classList.add("invalid");
}

// This clears the error message and removes the red border
function clearError(input, errorSpan) {
    errorSpan.textContent = "";
    input.classList.remove("invalid");
}

// Checks if the username is filled in and at least 3 characters long
function validateUsername() {
    if (username.validity.valueMissing) {
        showError(username, " Username is required", usernameError);
    } else if (username.value.length < 3) {
        showError(username, "Username should be at least 3 characters", usernameError);
    } else {
        clearError(username, usernameError);
    }
}

// Checks if the email field is filled and in a valid format
function validateEmail() {
    if (email.validity.valueMissing) {
        showError(email, " Email is required", emailError);
    } else if (email.validity.typeMismatch) {
        showError(email, "Please enter a valid email", emailError);
    } else {
        clearError(email, emailError);
    }
}

// Password must have at least one lowercase, one uppercase, one number, and be 8 characters long
function validatePassword() {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const passwordValue = password.value;

    if (!passwordValue) {
        showError(password, "Password is required", passwordError);
    } else if (!pattern.test(passwordValue)) {
        showError(
            password,
            "Password must be at least 8 characters, include a lowercase letter, an uppercase letter, and a number",
            passwordError
        );
    } else {
        clearError(password, passwordError);
    }
}

// Confirms that the password and confirm password fields match
function validateConfirmPassword() {
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if (!confirmPasswordValue) {
        showError(confirmPassword, "Please confirm your password", confirmPasswordError);
    } else if (passwordValue !== confirmPasswordValue) {
        showError(confirmPassword, "Passwords do not match", confirmPasswordError);
    } else {
        clearError(confirmPassword, confirmPasswordError);
    }
}

// When the form is submitted, check all fields before allowing the form to go through
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the default form submission

    // Run all validation checks
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    // If no error messages are present, save the username and reset the form
    if (
        usernameError.textContent === "" &&
        emailError.textContent === "" &&
        passwordError.textContent === "" &&
        confirmPasswordError.textContent === ""
    ) {
        localStorage.setItem("username", username.value); // Save the username
        alert("Registration successful!"); // Notify the user
        form.reset(); // Clear the form
    }
});

// When the page loads, check if a username was saved earlier and fill it in
window.addEventListener("DOMContentLoaded", () => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        username.value = savedUsername;
    }
});
