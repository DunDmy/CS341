/* Author: Austin Vanburen
 * Last Edited:
 * Status: Complete
 *
 * Changes what is displayed in the flux area of the shopping page.
 * Flux values are a character from the set {i, e}
 */

export const changeFlux = (flux) => {
	return {
		type: "CHANGE_FLUX_STATE",
		payload: flux
	}
}