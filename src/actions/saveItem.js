/* Author: Austin Vanburen
 * Description: Saves edited item information (from admin page) to the database and back.
 * Parameters: item
 * Connected Reducers: Search_Reducer
 * Connected to Database: TRUE
 */
import axios from 'axios';

export const saveItem = (item) => {
	console.log(item)
	return dispatch => {
		axios
			.post('http://localhost:3000/shoppingcart/admin/update/',
				item,
			)
			.then(res => {
				dispatch(saveItemSuccess(res.data));
			})
			.catch (err => {
				dispatch(saveItemFailure(err.message));
			})
		};
};

const saveItemSuccess = item => {
	return {
		type: "SAVE_ITEM_SUCCESS",
		payload: item
	};
};

const saveItemFailure = error => {
	return {
		type: "SAVE_ITEM_FAILURE",
		payload: error
	};
};