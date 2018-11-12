/* Author: Austin Vanburen
 * Last Edited:
 * Status: Incomplete. TODO:
 */

//Initial State. Default user is a guest.
//pages: w = welcome, s = shopping, r = register, l = login
const initialState = {
	page: 'w'
}

//Reducer
export default function (state=initialState, action) {
	switch(action.type) {
		case "PAGE_CHANGE":
			/*state={ 
				page: action.payload
			}*/
			return {...state, page: action.payload}
			break;
		default:
			return state;
	}
}