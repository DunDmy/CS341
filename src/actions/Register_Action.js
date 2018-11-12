/*
* Author: Dmytro I Dundukov and Tim Griffin
* SHORT DESC: Action for Register container
* LONG DESC: This file contains actions for register container 
*/

import {REGISTER_EMAIL, REGISTER_PASSWORD, REGISTER_CONFIRM_PASSWORD, REGISTERED_USER} from '../constants/constants';
import axios from 'axios';

export const register = (regState) => {
	console.log(regState)
	return dispatch => {
		axios
			.post('http://localhost:3000/register',
				regState,
			)
			.then(res => {
				dispatch(registerSuccess(res.data));
			})
			.catch (err => {
				dispatch(registerFailure(err.message));
			})
		};
};

const registerSuccess = regState => {
	return {
		type: "REGISTER_SUCCESS",
		payload: regState
	};
};

const registerFailure = error => {
	return {
		type: "REGISTER_FAILURE",
		payload: error
	};
};
/*******************************************************/
// email field
export const registerEmail = (registerEmail) => ({
	type: REGISTER_EMAIL,
	payload: registerEmail
})

// password field
export const registerPassword = (registerPassword) => ({
	type: REGISTER_PASSWORD,
	payload: registerPassword
})

// confirm password field
export const registerConfirmPassword = (registerConfirmPassword) => ({
	type: REGISTER_CONFIRM_PASSWORD,
	payload: registerConfirmPassword
})

// submit button
export const registeredUser = (boolean) => ({
	type: REGISTERED_USER,
	payload: boolean
})