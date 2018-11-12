/* Author: Austin Vanburen
 * Description: Sends promotion dates and code to the database.
 * Parameters: promotion = {promoCode, StartMoment, EndMoment}
 * Connected Reducers: Pricing_Reducer
 * Connected to Database: TRUE
 */

import axios from 'axios';

export const activatePromotion = (promotion) => {
	console.log(promotion)
	return dispatch => {
		axios
			.post('URL',
				promotion,
			)
			.then(res => {
				dispatch(activatePromotionSuccess(res.data));
			})
			.catch (err => {
				dispatch(activatePromotionFailure(err.message));
			})
		};
};

const activatePromotionSuccess = promotion => {
	return {
		type: "ACTIVATE_PROMOTION_SUCCESS",
		payload: promotion
	};
};

const activatePromotionFailure = error => {
	return {
		type: "ACTIVATE_PROMOTION_FAILURE",
		payload: error
	};
};