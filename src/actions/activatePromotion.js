/* Author: Austin Vanburen
 * Description: Sends promotion dates and code to the database.
 * Parameters: listOfProds
 * Connected Reducers: Search_Reducer
 * Connected to Database: TRUE
 */

import axios from 'axios';

export const activatePromotion = (promo) => {
	console.log(promo)
	return dispatch => {
		axios
			.post('http://localhost:3000/shoppingcart/admin/updatePromo/',
				promo,
			)
			.then(res => {
				dispatch(activatePromotionSuccess(res.data));
			})
			.catch (err => {
				dispatch(activatePromotionFailure(err.message));
			})
		};
};

const activatePromotionSuccess = listOfProds => {
	return {
		type: "ACTIVATE_PROMOTION_SUCCESS",
		payload: listOfProds
	};
};

const activatePromotionFailure = error => {
	return {
		type: "ACTIVATE_PROMOTION_FAILURE",
		payload: error
	};
};