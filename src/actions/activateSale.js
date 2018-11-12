/* Author: Austin Vanburen
 * Description: Sends sale dates to the database.
 * Parameters: sale = {StartMoment, EndMoment}
 * Connected Reducers: Pricing_Reducer
 * Connected to Database: TRUE
 */

import axios from 'axios';

export const activateSale = (sale) => {
	console.log(sale)
	return dispatch => {
		axios
			.post('URL',
				sale,
			)
			.then(res => {
				dispatch(activateSaleSuccess(res.data));
			})
			.catch (err => {
				dispatch(activateSaleFailure(err.message));
			})
		};
};

const activateSaleSuccess = sale => {
	return {
		type: "ACTIVATE_SALE_SUCCESS",
		payload: sale
	};
};

const activateSaleFailure = error => {
	return {
		type: "ACTIVATE_SALE_FAILURE",
		payload: error
	};
};