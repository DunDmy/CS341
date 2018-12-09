/* Author: Austin Vanburen
 * Last Edited:
 * Status: Incomplete. TODO:
 */

//Initial State. Default user is a guest.
const initialState = {
	"id": 0,
	"prod": "item",
	"desc": "desc",
	"price": 10.50,

	"sale": false,
	"saleStart": null,
	"saleEnd": null,
	"salePrice": 10.50,

	"promo": false,
	"promoPrice": 10.50,
	"promoCode": "NOCODE",
	"promoStart": null,
	"promoEnd": null,
	"numAvail": 1, //TODO: ADD
	"image": "http://tachyons.io/img/avatar-mrmrs.jpg",
				
	"quantity": 1, //TODO: ADD
}

//Reducer
export default function (state=initialState, action) {
	console.log("ACTIVE ITEM REDUCER");
	console.log(action);
	switch(action.type) {
		case "ADD_BLANK_ITEM":
			return action.payload;
			break;
		case "UPDATE_ACTIVE_ITEM":
			console.log("Im in here!");
			return Object.assign({}, state, action.payload);
			break;
		default:
			return state;
	}
}