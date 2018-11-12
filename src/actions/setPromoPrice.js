/* Author: Austin Vanburen
 * Description: Sends promotion dates and code to the database.
 * Parameters: percent
 * Connected Reducers: Search_Reducer
 * Connected to Database: TRUE
 */

import axios from 'axios';

export const setPromoPrice = (listOfProds) => {
	console.log(listOfProds);
	return dispatch => {
		axios
			.post('URL',
				listOfProds,
			)
			.then(res => {
				dispatch(setPromoPriceSuccess(res.data));
			})
			.catch (err => {
				dispatch(setPromoPriceFailure(err.message));
			})
		};
};

const setPromoPriceSuccess = listOfProds => {
	return {
		type: "SET_PROMO_PRICE_SUCCESS",
		payload: listOfProds
	};
};

const setPromoPriceFailure = error => {
	return {
		type: "SET_PROMO_PRICE_FAILURE",
		payload: error
	};
};