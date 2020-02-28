import { getCommonPasswords, passwordValidator } from './lib.js';

let commonPasswords = [];
const passwordElem = document.querySelector('#password');
const submitElem = document.querySelector('#submit');
const statusElem = document.querySelector('#status');

/**
 * Fetch the list of common passwords from the backend
 */
window.addEventListener('DOMContentLoaded', async () => {
    commonPasswords = await getCommonPasswords();
    passwordElem.focus();
});

/**
 * Run the validation and add error messages on submit
 */
submitElem.addEventListener('click', (e) => {
    e.preventDefault();
    const errorMessages = passwordValidator(passwordElem.value, commonPasswords);

    if(errorMessages.length) {
        const listItems = errorMessages.map(msg => `<li>${msg}</li>`).join('');
        statusElem.innerHTML = `<ul>${listItems}</ul>`;
    } else {
        statusElem.innerHTML = 'Your password is strong!'
    }

    passwordElem.select(); // select password input
});

/**
 * Clear the password input when typing
 */
passwordElem.addEventListener('input', (e) => {
    statusElem.innerHTML = '';
});