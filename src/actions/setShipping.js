/* Author: Austin Vanburen
 * Description: Sends shipping information to reducer.
 * Parameters: info = {promoEnabled, name, country, street, city, zip}
 * Connected Reducers: ShoppingCart_Reducer
 * Connected to database: FALSE
 */

export const setShipping = (info) => {
	console.log(info)
	return {
		type: "SET_SHIPPING",
		payload: info
	}
}
