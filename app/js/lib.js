import { fetchCommonPasswords } from './api.js';
import { ERRORS, SUCCESS } from './constants.js';

/**
 * Retrieve the list of common passwords from the express sever
 */
export const getCommonPasswords = async () => {
    const response = await fetchCommonPasswords();
    const passwords = await response.text();
    console.log('common passwords received and parsed')
    return passwords.split('\n');
};

/**
 * Check whether the length of characters is between the 8 & 64 range
 * 
 * @param str string to validate
 */
export const validateLength = (str) => {
    return str.length >= 8 && str.length <= 64 ? SUCCESS : ERRORS.LENGTH;
};

/**
 * Check if the string is composed of ASCII characters
 * 
 * @param str string to validate
 */
export const validateCharacters = (str) => {
    for(let i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) > 127) return ERRORS.CHARACTER;
    }
    return SUCCESS;
};

/**
 * Check if the the password exists in the commonPasswords array
 * 
 * @param str password passed in from form
 * @param array common passwords to check from
 */
export const validateStrength = (str, array) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === str) return ERRORS.COMMON;
    }
    return SUCCESS;
};

export const passwordValidator = (pwd, passwords) => {
    let messages = [];

    const length = validateLength(pwd);
    const characters = validateCharacters(pwd);
    const strength = validateStrength(pwd, passwords);
    const { LENGTH, CHARACTER, COMMON } = ERRORS;
    
    // return all messages if no password is entered
    if(!pwd) return [LENGTH, CHARACTER, COMMON];

    if(length !== 'Success') messages.push(length);

    if(characters !== 'Success') messages.push(characters);
    
    if(strength !== 'Success') messages.push(strength);
    
    return messages;
};
