/* Author: Austin Vanburen
 * Last Edited:
 * Status: Incomplete. TODO: implement updateActiveUser action
 */
 import {REGISTER_EMAIL, REGISTER_PASSWORD, REGISTER_CONFIRM_PASSWORD, REGISTERED_USER} from '../constants/constants';

//Initial State. Default user is a guest.
const initialState = {
	id: 0,
	userEmail: 'GUEST',
	firstName: 'John',
	lastName: 'Wayne',
	isGuest: true,
	isAdmin: false	
}

//Reducer
export default function (state=initialState, action) {
	switch(action.type) {
/************************************************************************/
		case "SIGNIN_SUBMIT_SUCCESS":
			console.log(action.payload);
			return {...state, 
				id: action.payload[0].USER_ID,
				userEmail: action.payload[0].USER_EMAIL,
				firstName: action.payload[0].USER_FNAME,
				lastName: action.payload[0].USER_LNAME,
				isGuest: false,
				isAdmin: action.payload[0].IS_ADMIN,
			};
		case "SIGNIN_SUBMIT_FAILURE":
			console.log("Error: ", action.payload);
			return state;
/************************************************************************/
		case "SET_BILLING_SUCCESS":
			console.log(action.payload);
			return state;
		case "SET_BILLING_FAILURE":
			console.log("Error: ", action.payload);
			return state;
/************************************************************************/
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