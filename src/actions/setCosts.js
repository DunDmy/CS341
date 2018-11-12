/* Author: Austin Vanburen
 * Description: Sends purchase information to reducer.
 * Parameters: costInfo = {shippingCost, taxesCost, orderCost, totalCost, savingsTotal}
 * Connected Reducers: ShoppingCart_Reducer
 * Connected to Database: FALSE
 */

export const setCosts = (costInfo) => {
	return {
		type: "SET_COSTS",
		payload: costInfo
	}
}
