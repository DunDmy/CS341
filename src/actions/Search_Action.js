/* Author: Dmytro I Dundukov 
 * Description: Set text filters products shown in search container.
 * Parameters: text
 * Connected Reducers: Search_Reducer
 * Connected to Database: FALSE
 */

import {CHANGE_SEARCH_FIELD} from '../constants/constants';

// search field
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})
