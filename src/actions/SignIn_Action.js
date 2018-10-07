/*
* Author: Dmytro I Dundukov 
* SHORT DESC: Action for SignIn container
* LONG DESC: This file contains actions for SignIn container 
*/
import {SIGNIN_SUBMIT, SIGNIN_SUBMIT_EMAIL, SIGNIN_SUBMIT_PASSWORD} from '../constants/constants';

// email field
export const signInSubmitEmail = (email) =>({
	type: SIGNIN_SUBMIT_EMAIL,
	payload: email
})

// password field
export const signInSubmitPassword = (password) => ({
	type: SIGNIN_SUBMIT_PASSWORD,
	payload: password
})

// submit button
export const signInSubmit = (submit) =>({
	type: SIGNIN_SUBMIT,
	submit: submit
})

