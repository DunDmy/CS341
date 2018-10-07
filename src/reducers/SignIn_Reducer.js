/*
* Author: Dmytro I Dundukov 
* SHORT DESC: SignIn reducer
* LONG DESC: This reducer is used to update the global state of the app when a user signs in.
*/
import {SIGNIN_SUBMIT, SIGNIN_SUBMIT_PASSWORD, SIGNIN_SUBMIT_EMAIL} from '../constants/constants';
import React from 'react';

const initialState = {
	user: '',
	password: ''
}

export const signIn = (state = initialState, action={}) =>{
	switch(action.type){
		case SIGNIN_SUBMIT_EMAIL:{
			  console.log("inside SIGNIN_SUBMIT_EMAIL");
			  console.log(action.payload);
			return {...state, email: action.payload};
		}
		case SIGNIN_SUBMIT_PASSWORD:{
			  console.log("inside SIGNIN_SUBMIT_PASSWORD");
			  console.log(action.payload);
			return {...state, password: action.payload};
		}
		case SIGNIN_SUBMIT:{
			if( state.password === '111'){
				console.log("Success")
			}
		}
		default:
			console.log(action.type);
			console.log(state.password);
			console.log("inside reducer");
			return state;
	}
}



