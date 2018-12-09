/* Author: Dmytro Dundukov
 * Description: Updates the active item for a more in depth viewing pane.
 * Parameters: item
 * Connected Reducers: ActiveItem_Reducer
 * Connected to Database: FALSE
 */

export const inHistory = (item) => {
	console.log('ACTION');
	console.log(item);
	return {
		type: "PRODUCT_IN_HISTORY",
		payload: item
	};
};