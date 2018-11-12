/* Author: Austin Vanburen
 * Description: Removes the given product from database and reducer.
 * Parameters: item
 * Connected Reducers: Search_Reducer
 * Connected to Database: True
 */

import axios from 'axios';

export const deleteItem = (item) => {
	console.log(item);
	return dispatch => {
		axios
			.post('URL',
				item,
			)
			.then(res => {
				dispatch(deleteItemSuccess(res.data));
			})
			.catch (err => {
				dispatch(deleteItemFailure(err.message));
			})
		};
};

const deleteItemSuccess = item => {
	return {
		type: "DELETE_ITEM_SUCCESS",
		payload: item
	};
};

const deleteItemFailure = error => {
	return {
		type: "DELETE_ITEM_FAILURE",
		payload: error
	};
};