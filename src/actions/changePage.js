/* Author: Austin Vanburen
 * Last Edited:
 * Status: Complete.
 *
 * Changes the page of the webapplication. Where page is a char from the set {w, r, l, s}.
 */

export const changePage = (page) => {
	return {
		type: "PAGE_CHANGE",
		payload: page
	}
}