/* Author: Austin Vanburen
 * Last Edited:
 * Status: Incomplete. TODO:
 */

//Initial State. Default user is a guest.
const initialState = {
	id: 0,
	prodName: "PRODUCTNAME",
	price: "$0.00",
	type: "NAN",
	description: "DESCRIPTION",
	image: "./thumbnail.png"

}

//Reducer
export default function (state=initialState, action) {
	switch(action.type) {
		case "ADDING_TO_CART": //TODO: Figure out how to add to an array. Should update total price aswell.
			//state = {	
			//}

			return state
			break;
		default:
			return state;
	}
}