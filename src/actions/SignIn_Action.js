/*
* Author: Dmytro I Dundukov 
* SHORT DESC: Action for SignIn container
* LONG DESC: This file contains actions for SignIn container 
*/
import {SIGNIN_SUBMIT, SIGNIN_SUBMIT_EMAIL, SIGNIN_SUBMIT_PASSWORD} from '../constants/constants';
import axios from 'axios';
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
export function signInSubmit(user, password, event) {
	const info = {
		user: user,
		password: password,
	}
	//console.log(user);
	//console.log(password);
	console.log(info);
	return dispatch => {
		axios
			.post('http://localhost:3000/signin',
				info
			)
			.then(res => {
				//setTimeout(() => {
					//console.log(res)
					dispatch(signInSubmitSuccess(res.data));
				//}, 2500);
			})
			.catch (err => {
				dispatch(signInSubmitFailure(err.message));
			})
		};
};

const signInSubmitSuccess = (info) => {
	console.log(info);
	return {
		type: "SIGNIN_SUBMIT_SUCCESS",
		payload: info
	};
};

const signInSubmitFailure = error => {
	return {
		type: "SIGNIN_SUBMIT_FAILURE",
		payload: error
	};
};
