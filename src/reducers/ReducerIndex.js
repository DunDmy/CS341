/*
* TITLE: reducerIndex
* @Author: Dmytro I Dundukov
* DESC: This reducer is used to combine all reducers into one object that will be passed to store inside index.js. 
*/

import  {combineReducers} from 'redux';
import {searchProd} from './ReducerSearch';
import Items from './ReducerListOfProd';

// const that combines all redusers. Add reducers when needed
export const allReducers =  combineReducers({ searchProd,  product: Items });