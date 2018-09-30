/* Author: Austin Vanburen
 * Last Edited:
 * Status: Incomplete. TODO: implement updateActiveUser action
 */

//Initial State. Default user is a guest.
const initialState = {
	id: 0,
	userEmail: 'GUEST',
	userPassword: 'GUEST',
	firstName: 'John',
	lastName: 'Wayne',
	isGuest: true	
}

//Reducer
export default function (state=initialState, action) {
	switch(action.type) {
		case "": //TODO: updateActiveUser action
			return action.payload; 
			break;
		default:
			return state;
	}
}