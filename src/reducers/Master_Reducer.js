/*
* TITLE: reducerIndex
* @Author: Dmytro I Dundukov, Austin Vanburen
* DESC: This reducer is used to combine all reducers into one object that will be passed to store inside index.js. 
*/

//Imported Functions
import  {combineReducers} from 'redux';
import {searchProd} from './Search_Reducer';
import {signIn} from './SignIn_Reducer';
import {register} from './Register_Reducer';
import {onSales} from './On_Sale_Reducer.js';
import {inHistory} from './In_History_Reducer.js';

//Imported Reducers
import ActiveItem from './ActiveItem_Reducer.js';
import ActiveUser from './ActiveUser_Reducer.js';
import App from './App_Reducer.js';
import ShoppingCart from './ShoppingCart_Reducer.js';
import ShoppingPage from './ShoppingPage_Reducer.js';
import User_Info from './UserList_Reducer';
import AdminPage from './AdminPage_Reducer.js';
import Pricing from './Pricing_Reducer.js';

// const that combines all redusers. Add reducers when needed
export const allReducers =  combineReducers({searchProd, signIn, register, onSales, inHistory,
	adminPageStates: AdminPage,
	userInfo: User_Info,
	activeUser: ActiveUser,
	appStates: App,
	activeItem: ActiveItem,
	shoppingPageStates: ShoppingPage,
	cart: ShoppingCart,
	pricing: Pricing,
});