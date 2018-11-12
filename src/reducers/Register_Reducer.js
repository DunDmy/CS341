/*
* Author: Dmytro I Dundukov 
* SHORT DESC: Register reducer
* LONG DESC: This reducer is used to update the global state of the app when a user registers.
*/
import {REGISTER_EMAIL, REGISTER_PASSWORD, REGISTER_CONFIRM_PASSWORD, REGISTERED_USER} from '../constants/constants';
import React from 'react';

const initialState = {
	userEmail: '',
	registerConfirmPassword: '',
	registerPassword: '',
}

export const register = ( state = initialState, action = {}) => {
	switch(action.type){
		case "REGISTER_SUCCESS":
			return state;
		case "REGISTER_FAILURE":
			console.log("Error: ", action.payload);
			return state;
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
			// console.log("Action from register confirm password");
			// console.log(action.type);
			// console.log(action.payload);
			return{...state, registerConfirmPassword: action.payload}
		}
		case REGISTERED_USER:{
			return{...state, registered: action.payload}
		}
		default:
			return state;
	}
}
