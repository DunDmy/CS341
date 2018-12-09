/* Author: Dmytro Dudukov
 * Description: Sends sale dates to the database.
 * Parameters: sale = {StartMoment, EndMoment}
 * Connected Reducers: Pricing_Reducer
 * Connected to Database: TRUE
 */
/*
import axios from 'axios';

export const setTax = (tax) => {
	return dispatch => {
		axios
			.get('http://localhost:3000/shoppingpage/shoppingcart/tax/states')
			.then(res => {
				dispatch(activateSaleSuccess(res.data));
			})
			.catch (err => {
				dispatch(activateSaleFailure(err.message));
			})
		};
};

const activateSaleSuccess = tax => {
	console.log("STATE TAX")
	console.log(tax);
	return {
		type: "STATE_TAX_SUCCESS",
		payload: tax
	};
};

const activateSaleFailure = error => {
	return {
		type: "STATE_TAXX_FAILURE",
		payload: error
	};
};*/


export const setTax = (item) => {
	console.log(item);
	return {
		type: "STATE_TAX_SUCCESS",
		payload: item
	};
};