/* Author: Austin Vanburen
 * Last Edited:
 * Status: Incomplete. TODO: implement updateActiveUser action
 */
 import {REGISTER_EMAIL, REGISTER_PASSWORD, REGISTER_CONFIRM_PASSWORD, REGISTERED_USER} from '../constants/constants';

//Initial State. Default user is a guest.
const initialState = {
	id: 0,
	userEmail: 'GUEST',
	userPassword: 'GUEST',
	registerConfirmPassword: ' ',
	firstName: 'John',
	lastName: 'Wayne',
	isGuest: true	
}

//Reducer
export default function (state=initialState, action) {
	switch(action.type) {
		case REGISTER_EMAIL:{
			// console.log("Action from register email");
			// console.log(action.type);
			// console.log(action.payload);
			return {...state, userEmail: action.payload};
		}
		case REGISTER_PASSWORD:{
			// console.log("Action from register password");
			// console.log(action.type);
			// console.log(action.payload);
			return{...state, registerPassword: action.payload};
		}
		case REGISTER_CONFIRM_PASSWORD:{
			console.log("Action from register confirm password");
			// console.log(action.type);
			// console.log(action.payload);
			return{...state, registerConfirmPassword: action.payload}
		}
		case REGISTERED_USER:{
			return{...state, isGuest: action.payload}
		}
		default:
			return state;
	}
}