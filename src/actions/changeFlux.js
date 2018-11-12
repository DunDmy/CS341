/* Author: Austin Vanburen
 * Description: Updates the flux states for the given pages: AdminPage and ShoppingPage
 * Parameters: flux
 * Connected Reducers: AdminPage_Reducer, ShoppingPage_Reducer
 * Connected to Database: FALSE
 */
 
//Shopping Page
//Flux Values are a character from the set {i, c, u, b, e, r}
export const changeFlux = (flux) => {
	console.log("Flux Change: ", flux)
	return {
		type: "CHANGE_FLUX_STATE",
		payload: flux
	}
}

//Admin Page
//Flux values are a character from the set {i, e, p}
export const changeAdminFlux = (flux) => {
	return {
		type: "CHANGE_ADMIN_FLUX_STATE",
		payload: flux
	}
}