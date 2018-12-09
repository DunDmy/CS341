/* Author: Austin Vanburen
 * Description: Removes the given product from database and reducer.
 * Parameters: id
 * Connected Reducers: Search_Reducer
 * Connected to Database: True
 */

import axios from 'axios';

export const deleteItem = (id) => {
	const url = 'http://localhost:3000/shoppingcart/admin/remove/' + id;
	return dispatch => {
		axios
			.delete(url)
			.then(res => {
				//dispatch(deleteItemSuccess(res.data));
			})
			.catch (err => {
				dispatch(deleteItemFailure(err.message));
			})
		};
};

export const deleteItemSuccess = id => {
	return {
		type: "DELETE_ITEM_SUCCESS",
		payload: id
	};
};

const deleteItemFailure = error => {
	return {
		type: "DELETE_ITEM_FAILURE",
		payload: error
	};
};