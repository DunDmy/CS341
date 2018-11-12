/* Author: Austin Vanburen
 * Description: Creates an item from the given template.
 * Parameters: NA
 * Connected Reducers: Search_Reducer
 * Connected to Database: TRUE
 */

import axios from 'axios';

export const addBlankItem = () => {
	return dispatch => {
		axios
			.post('http://localhost:3000/shoppingcart/admin/add', {
				"prod": "item",
				"desc": "desc",
				"price": 10.50,

				"sale": false,
				"saleStart": null,
				"saleEnd": null,
				"salePrice": 10.50,

				"promo": false,
				"promoPrice": 10.50,
				"promoCode": "NOCODE",
				"promoStart": null,
				"promoEnd": null,
				//"numAvail": 1, //TODO: ADD
				"image": "http://tachyons.io/img/avatar-mrmrs.jpg"
				
				//quantity: 1, //TODO: ADD
			})
			.then(res => {
				dispatch(addBlankItemSuccess(res.data));
			})
			.catch (err => {
				dispatch(addBlankItemFailure(err.message));
			})
		};	
};

//Item retrieved from database must contain an updated id, such that there are no duplicating ids..
const addBlankItemSuccess = item => {
	return {
		type: "ADD_BLANK_ITEM_SUCCESS",
		payload: item
	};
};

const addBlankItemFailure = err => {
	return {
		type: "ADD_BLANK_ITEM_FAILURE",
		payload: err
	};
};