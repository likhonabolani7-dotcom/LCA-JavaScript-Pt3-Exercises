const registrationForm = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

function clearErrors() {
  formMessage.textContent = '';
  formMessage.classList.remove('success');

  const errorFields = [
    usernameError,
    emailError,
    passwordError,
    confirmPasswordError,
  ];

  errorFields.forEach((field) => {
    field.textContent = '';
  });

  [usernameInput, emailInput, passwordInput, confirmPasswordInput].forEach(
    (input) => {
      input.classList.remove('error');
    }
  );
}

function showError(input, errorElement, message) {
  errorElement.textContent = message;
  input.classList.add('error');
}

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearErrors();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  let isValid = true;

  if (!username) {
    showError(usernameInput, usernameError, 'Username cannot be empty');
    isValid = false;
  }

  if (!email) {
    showError(emailInput, emailError, 'Email cannot be empty');
    isValid = false;
  } else if (!email.includes('@')) {
    showError(emailInput, emailError, 'Email must include @');
    isValid = false;
  }

  if (!password) {
    showError(passwordInput, passwordError, 'Password cannot be empty');
    isValid = false;
  } else if (password.length < 6) {
    showError(passwordInput, passwordError, 'Password must be at least 6 characters');
    isValid = false;
  }

  if (!confirmPassword) {
    showError(confirmPasswordInput, confirmPasswordError, 'Confirm Password cannot be empty');
    isValid = false;
  } else if (confirmPassword !== password) {
    showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match');
    isValid = false;
  }

  if (isValid) {
    formMessage.textContent = 'Registration successful!';
    formMessage.classList.add('success');
    console.log('Registration data:', { username, email });
    registrationForm.reset();
  }
});
