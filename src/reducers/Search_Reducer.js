/* Author: Austin Vanburen, Dmytro I Dundukov
 * Description: Stores complete product information from the database.
 * Products are rendered through the search component.
 * Connected Actions: populateItems, addBlankItem, deleteItem
 */

import {CHANGE_SEARCH_FIELD} from '../constants/constants';
import React from 'react';

const initialState = {
	searchField: '',
	product : [],
}

export const searchProd = (state = initialState, action={}) =>{
	function evalID (element) {
		return element.id === action.payload[0].PROD_ID;
	}

	console.log(action)
	switch(action.type){
		case "CHANGE_SEARCH_FIELD":
			return {...state, searchField: action.payload};
/************************************************************************/	
		case "SET_PROMO_PRICE_SUCCESS":
			return {...state, product: action.payload};

		case "SET_PROMO_PRICE_FAILURE":
			console.log("Error: ", action.payload);
			return state;
/************************************************************************/	
		case "POPULATE_ITEMS_SUCCESS":
			console.log(action);
			var a = action.payload.map((item, i) => {
				return {
					"id": item.PROD_ID,
					"prod": item.PROD_NAME,
					"desc": item.PROD_DESC,
					"price": item.PROD_PRICE,

					"sale": item.ON_SALE,
					"saleStart": item.SALE_START_DATE,
					"saleEnd": item.SALE_END_DATE,
					"salePrice": item.SALE_PRICE,

					"promo": item.IS_PROMO,
					"promoPrice": item.PROMO_PRICE,
					"promoCode": item.PROMO_CODE,
					"promoStart": item.PROMO_START_DATE,
					"promoEnd": item.PROMO_END_DATE,
					
					"numAvail": 1, //TODO: ADD
					"image": "http://tachyons.io/img/avatar-mrmrs.jpg",
					"quantity": 1, //TODO: ADD
				}
			});
			return {...state, product: a};

		case "POPULATE_ITEMS_FAILURE":
			console.log("Error: ", action.payload);
			return state;
/************************************************************************/			
		case "REDUCE_ITEM_STOCK_SUCCESS":
			return state;

		case "REDUCE_ITEM_STOCK_FAILURE":
			console.log("Error: ", action.payload);
			return state;
		
/************************************************************************/		
		case "SAVE_ITEM_SUCCESS":
			console.log(action.payload);
			var i = state.product.findIndex(evalID);
			//const index = state.product.map(item => item.name).indexOf(action.payload.PROD_ID);
			if (i === -1) {	console.log("Error: Item not found."); return state; }
 			
 			var item = {
					"id": action.payload[0].PROD_ID,
					"prod": action.payload[0].PROD_NAME,
					"desc": action.payload[0].PROD_DESC,
					"price": action.payload[0].PROD_PRICE,

					"sale": action.payload[0].ON_SALE,
					"saleStart": action.payload[0].SALE_START_DATE,
					"saleEnd": action.payload[0].SALE_END_DATE,
					"salePrice": action.payload[0].SALE_PRICE,

					"promo": action.payload[0].IS_PROMO,
					"promoPrice": action.payload[0].PROMO_PRICE,
					"promoCode": action.payload[0].PROMO_CODE,
					"promoStart": action.payload[0].PROMO_START_DATE,
					"promoEnd": action.payload[0].PROMO_END_DATE,
					
					"numAvail": 1, //TODO: ADD
					"image": "http://tachyons.io/img/avatar-mrmrs.jpg",
					"quantity": 1, //TODO: ADD
				}
				
			console.log(i)
			console.log(item)
			var a = state.product.slice();
			a[i] = item;

			return {...state, product: a};
			
		case "SAVE_ITEM_FAILURE":
			console.log("Error: ", action.payload);
			return state;
/************************************************************************/	
		case "ADD_BLANK_ITEM_SUCCESS":
			//Clones array from state.
			var a = state.product.slice();
			console.log(action)
			var item = {
				"prod": "item",
				"desc": "desc",
				"price": 10.50,

				"sale": false,
				"saleStart": null,
				"saleEnd": null,
				"salePrice": 10.50,

				"promo": false,
				"promoPrice": 10.50,
				"promoCode": "NOCODE",
				"promoStart": null,
				"promoEnd": null,
				"numAvail": 1, //TODO: ADD
				"image": "http://tachyons.io/img/avatar-mrmrs.jpg",
				
				"quantity": 1, //TODO: ADD
			}

			a.push(item);
			return {...state, product: a};

		case "ADD_BLANK_ITEM_FAILURE":
			console.log("Error: ", action.payload);
			return state;
/************************************************************************/	
		case "DELETE_ITEM_SUCCESS":
			var i = state.product.findIndex(evalID);
			if (i == -1) {	console.log("Error: Item not found."); return state; }
 			
 			//Clones array from state.
			var a = state.product.slice(i, 1);
			return {...state, product: a};

		case "DELETE_ITEM_FAILURE":
			console.log("Error: ", action.payload);
			return state;
/************************************************************************/	
		default: 
			return state;
	};
};
