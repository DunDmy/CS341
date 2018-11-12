/* Author: Austin Vanburen
 * Description: Retrieves products from database.
 * Parameters: NA
 * Connected Reducers: Search_Reducer
 * Connected to Database: TRUE
*/
import axios from 'axios';

/*export const populateItems = () => {
	console.log("Populating Items in search Reducer.")
	var fetching = true;
	return dispatch => {
		axios.get('http://localhost:3000/shoppingpage/admin/products/')
			.then(res => console.log(res))
	};
};*/

export const populateItems = res => {
	console.log(res.data)
	return {
		type: "POPULATE_ITEMS_SUCCESS",
		payload: res.data
	};
};

const populateItemsFailure = error => {
	return {
		type: "POPULATE_ITEMS_FAILURE",
		payload: error
	};
};