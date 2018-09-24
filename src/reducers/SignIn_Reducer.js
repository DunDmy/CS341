import {SIGNIN_SUBMIT} from '../constants/constants';
import React from 'react';

const initialState = {
	user: '',
	password: ''
}

export const signIn = (state = initialState, action={}) =>{
	switch(action.type){
		case SIGNIN_SUBMIT:{
			  console.log("inside reducer");
			return {...state, user: action.payload};
		}
		default:
			console.log(action.type);
			console.log("inside reducer");
			return state;
	}
}



