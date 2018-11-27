/* Author: Austin Vanburen
 * Description: Stores sale and promotional item data.
 * Connected Actions: activatePromotion, activateSale,
 */

const initialState = {
	promoCode:"",
	promoStart:"",
	promoEnd:"",

	saleStart:"",
	saleEnd:"",
}

//Reducer
export default function (state=initialState, action) {
	switch(action.type) {
		/*case "ACTIVATE_PROMOTION_SUCCESS":
			console.log("TODO: update promotion dates in reducer.");
			return state;

		case "ACTIVATE_PROMOTION_FAILURE":
			console.log("Error: ", action.payload);
			return state;

		case "ACTIVATE_SALE_SUCCESS":
			console.log("TODO: update sale dates in reducer.");
			return state;

		case "ACTIVATE_SALE_FAILURE":
			console.log("Error: ", action.payload);
			return state;
*/
		default:
			return state;
	}
}