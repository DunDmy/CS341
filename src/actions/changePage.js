/* Author: Austin Vanburen
 * Description: Mimicks multiple webpages across this single page application.
 * Parameters: page where page is a char from the set {w, s, l, r}.
 * Connected Reducers: App_Reducer
 * Connected to Database: FALSE
 */

export const changePage = (page) => {
	return {
		type: "PAGE_CHANGE",
		payload: page
	}
}