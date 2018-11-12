/* Author: Austin Vanburen
 * Last Edited:
 * Status: Incomplete. TODO: 
 */

//Initial State. Default user is a guest.
//Let flux be a char from the set {i = ItemInfo, e = empty}
const initialState = {
	flux: 'e'
}

//Reducer
export default function (state=initialState, action) {
	switch(action.type) {
		case "CHANGE_ADMIN_FLUX_STATE":
			state={	
				flux: action.payload
			}
			return state
			break;
		default:
			return state;
	}
}