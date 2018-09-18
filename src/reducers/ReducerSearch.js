/*
* TITLE: reducerSearch
* @Author: Dmytro I Dundukov
* DESC: This reducer is used for instant search. 
*/
// This reducer is responsible for updating the state of the search
import {CHANGE_SEARCH_FIELD} from '../constants/constants';
import React from 'react';
const initialState = {
	searchField: ''
}

/*
 * This functoin is updates the state based on the user's input.
 */
export const searchProd = (state = initialState, action={}) =>{
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign()({}, state, {searchField: action.payload});
		default: 
			return state;
	}
	
	}
