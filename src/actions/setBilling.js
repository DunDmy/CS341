/* Author: Austin Vanburen, Dmytro Dundukov
 * Description: Sends credit card information to database to be evaluated.
 * Parameters: card = {num, expiry, cvc, zip}
 * Connected Reducers: ActiveUser_Reducer
 * Connected to Database: TRUE
 */

import axios from 'axios';

export const setBilling = (card, user) => {
	console.log('CONFIRM--------------------------------->');
	console.log(card);
	console.log(user);
	var date = new Date();
	var currentDate = new Date();
	var date = currentDate.getDate();
	var month = currentDate.getMonth(); //Be careful! January is 0 not 1
	var year = currentDate.getFullYear();
	var dateString = date + "-" +(month + 1) + "-" + year;
	var url = 'http://localhost:3000/shoppingpage/shoppingcart/' + user.id + '/' + card.id +  card.quantity + '/' + dateString ;
	console.log(url);
	return dispatch => {
		axios
			.put(url)
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