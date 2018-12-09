/* Author: Dmytro Dundukov
 * Description: Updates the active item for a more in depth viewing pane.
 * Parameters: item
 * Connected Reducers: ActiveItem_Reducer
 * Connected to Database: FALSE
 */

export const onSale = (item) => {
	console.log(item);
	return {
		type: "PRODUCT_ON_SALE",
		payload: item
	};
};