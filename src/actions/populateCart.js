/* Author: Austin Vanburen
 * Description: Populates the shopping cart with the user's most recent products.
 * Parameters: NA
 * Connected Reducers: ShoppingCart_Reducer
 * Connected to Database: TRUE
 */

import axios from 'axios';

export const populateCart = () => {
	var fetchCart = true;
	return dispatch => {
		axios
			.post('URL',
				fetchCart,
			)
			.then(res => {
				dispatch(populateCartSuccess(res.data));
			})
			.catch (err => {
				dispatch(populateCartFailure(err.message));
			})
		};
	};
};

const populateCartSuccess = items => {
	return {
		type: "POPULATE_CART_SUCCESS",
		payload: items
	};
};

const populateCart = error => {
	return {
		type: "POPULATE_CART_FAILURE",
		payload: error
	};
};