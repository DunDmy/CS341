/* Author: Austin Vanburen
 * Description: Adds a given item to the shopping cart.
 * Parameters: item
 * Connected Reducers: ShoppingCart_Reducer
 * Connected to Database: TRUE
 */

import axios from 'axios';

export const addToCart = (item) => {
	console.log(item);
	return {
		type: "ADD_TO_CART_SUCCESS",
		payload: item
	};
	
	//TODO: Hook up addToCart to database.
	/*
	return dispatch => {
		axios
			.post('URL',
				item,
			)
			.then(res => {
				dispatch(addToCartSuccess(res.data));
			})
			.catch (err => {
				dispatch(addToCartFailure(err.message));
			})
	};
	*/
};

const addToCartSuccess = item => {
	return {
		type: "ADD_TO_CART_SUCCESS",
		payload: item
	};
};

const addToCartFailure = error => {
	return {
		type: "ADD_TO_CART_FAILURE",
		payload: error
	};
};