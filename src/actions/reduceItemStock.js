/*
* Author: Austin Vanburen
* Description: Decreases property numAvail by the quantity within the cart (# purchased) for all items. Occurs after items are purchased.
* Parameters: itemsInCart contains a list of products.
* Connected Reducers: Search_Reducer
* Connected to Database: TRUE
*/

import axios from 'axios';

export const reduceItemStock = (itemsInCart) => {
	var updatedItems = itemsInCart.map((items, i) => {
		items.numAvail = items.numAvail - items.quantity;
		return items;
 	});

	//Items will need to be updated respectively within the database. Using id.
	console.log(updatedItems)
	return dispatch => {
		axios
			.post('URL',
				updatedItems,
			)
			.then(res => {
				dispatch(reduceItemStockSuccess(res.data));
			})
			.catch (err => {
				dispatch(reduceItemStockFailure(err.message));
			})
		};
};

//Expects database to return entire array of products.
const reduceItemStockSuccess = items => {
	return {
		type: "REDUCE_ITEM_STOCK_SUCCESS",
		payload: items
	};
};

const reduceItemStockFailure = error => {
	return {
		type: "REDUCE_ITEM_STOCK_FAILURE",
		payload: error
	};
};
