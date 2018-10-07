/*
* Author: Dmytro I Dundukov 
* SHORT DESC: Action for Search container
* LONG DESC: This file contains actions for Search container 
*/
import {CHANGE_SEARCH_FIELD} from '../constants/constants';

// search field
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})
