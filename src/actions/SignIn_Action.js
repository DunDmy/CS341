import {SIGNIN_SUBMIT} from '../constants/constants';
export const SignInSubmit = (email) =>(
	console.log("action"),
{
	type: SIGNIN_SUBMIT,
	payload: email
})