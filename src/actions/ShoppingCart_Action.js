/* Author: Austin Vanburen
 * Description: Various actions that alter the state of the shoppingcart.
 * Parameters: NA
 * Connected Reducers: Pricing_Reducer
 * Connected to Database: TRUE
 */

import axios from 'axios';

/************************************************************************/	
export const clearCart = () => {
	const cart = {
		//State Information
		editable: false,

		//Cost Information
		shippingCost: 0.00,
		taxesCost: 0.00,
		orderCost: 0.00,
		totalCost: 0.00,
		savingsTotal: 0.00,

		//User Information
		name: "NA",
		country: "United States of America",
		street: "NA",
		city: "NA",
		state: "NA",
		zip: "NA",

		//Item Information within Cart. Quantity of 0 denotes empty slot.
		items : []
	}

	console.log(cart)
	return dispatch => {
		axios
			.post('URL',
				cart,
			)
			.then(res => {
				dispatch(clearCartSuccess(res.data));
			})
			.catch (err => {
				dispatch(clearCartFailure(err.message));
			})
	};
};

const clearCartSuccess = cart => {
	return {
		type: "CLEAR_CART_SUCCESS",
		payload: cart
	};
};

const clearCartFailure = error => {
	return {
		type: "CLEAR_CART_FAILURE",
		payload: error
	};
};

/************************************************************************/	

export const changeQuantity = (updatedItems) => {
	//console.log(updatedItems);
	return {
		type: "CHANGE_QUANTITY_SUCCESS",
		payload: updatedItems
	};
	//TODO: Hook up to backend.
	/*return dispatch => {
		axios
			.post('URL',
				updatedItems,
			)
			.then(res => {
				dispatch(changeQuantitySuccess(res.data));
			})
			.catch (err => {
				dispatch(changeQuantityFailure(err.message));
			})
	};*/
};

const changeQuantitySuccess = updatedItems => {
	return {
		type: "CHANGE_QUANTITY_SUCCESS",
		payload: updatedItems
	};
};

const changeQuantityFailure = error => {
	return {
		type: "CHANGE_QUANTITY_FAILURE",
		payload: error
	};
};

/************************************************************************/	
//Does not require database.
export const changeToEditable = (payload) => {
	return {
		type: "SHOPPINGCART_EDIT",
		payload: payload
	}

}
