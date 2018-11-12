/* Author: Austin Vanburen
 * Description: Updates the active item for a more in depth viewing pane.
 * Parameters: item
 * Connected Reducers: ActiveItem_Reducer
 * Connected to Database: FALSE
 */

export const updateActiveItem = (item) => {
	console.log(item);
	return {
		type: "UPDATE_ACTIVE_ITEM",
		payload: item
	};
};