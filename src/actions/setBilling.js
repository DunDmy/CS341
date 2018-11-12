/* Author: Austin Vanburen
 * Description: Sends credit card information to database to be evaluated.
 * Parameters: card = {num, expiry, cvc, zip}
 * Connected Reducers: ActiveUser_Reducer
 * Connected to Database: TRUE
 */

import axios from 'axios';

export const setBilling = (card) => {
	console.log(card)
	return dispatch => {
		axios
			.post('URL',
				card,
			)
			.then(res => {
				dispatch(setBillingSuccess(res.data));
			})
			.catch (err => {
				dispatch(setBillingFailure(err.message));
			})
		};
};

//Returns a "Success!" string.
const setBillingSuccess = info => {
	return {
		type: "SET_BILLING_SUCCESS",
		payload: info
	};
};

const setBillingFailure = error => {
	return {
		type: "SET_BILLING_FAILURE",
		payload: error
	};
};