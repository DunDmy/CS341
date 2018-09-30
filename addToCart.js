/* Author: Austin Vanburen
 * Last Edited:
 * Status: Complete.
 *
 * Adds item to the shopping cart.
 */

export const addToCart = (item) => {
	return {
		type: "ADDING_TO_CART",
		payload: item
	}
}