/*
* @Author: Dmytro I Dundukov
* DESC: This reducer is used for instant search. 
*/
// This reducer is responsible for updating the state of the search
import {CHANGE_SEARCH_FIELD} from '../constants/constants';
import React from 'react';
const initialState = {
	searchField: '',
	product : [
		{	
			id: 1,
			prod: "Item 1",
			price: "$ 10",
			desc: "Item desc"

		},
		{
			id:2,
			prod: "Item 2",
			price: "$ 20",
			desc: "Item desc"
		},
		{
			id:3,
			prod: "Item 3",
			price: "$ 20",
			desc: "Item desc"
		},
		{
			id:4,
			prod: "Item 3",
			price: "$ 20",
			desc: "Item desc"
		},
		{
			id:5,
			prod: "Item 3",
			price: "$ 20",
			desc: "Item desc"
		}

	]
}

/*
 * This functoin is updates the state based on the user's input.
 */
export const searchProd = (state = initialState, action={}) =>{
	//console.log(action.payload);
	//console.log(action.type);
	switch(action.type){
		case CHANGE_SEARCH_FIELD:{
			return {...state, searchField: action.payload};}
		default: 
			return state;
	}
	
	}
