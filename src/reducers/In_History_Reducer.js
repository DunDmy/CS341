/* Author: Dmytro Dundukov
 * Last Edited:
 * Status: Incomplete. TODO:
 */

//Initial State. Default user is a guest.
const initialState = {

	product:[
				{
				   	"id": "test",
					"prod": "test",
					"desc": "test",
					"price": "test",

					"sale": "test",
					"saleStart": "test",
					"saleEnd": "test",
					"salePrice": "test",

					"promo": "test",
					"promoPrice": "test",
					"promoCode": "test",
					"promoStart": "test",
					"promoEnd": "test",
					
					"numAvail": 1,
					"image": "http://tachyons.io/img/avatar-mrmrs.jpg",
					"quantity": 1,
				},
			]
}
		// "IS_PROMO": false,
		// "ON_SALE": true,
		// "PROD_DESC": "item",
		// "PROD_ID": "5",
		// "PROD_IMAGE": null,
		// "PROD_NAME": "TIM BDE",
		// "PROD_PRICE": "9999",
		// "PROD_PURCHASED": true,
		// "PROD_QAUNTITY": null,
		// "PROD_QUANTITY": "1",
		// "PROMO_CODE": "3213123",
		// "PROMO_END_DATE": "2018-12-17T06:00:00.000Z",
		// "PROMO_PRICE": "12",
		// "PROMO_START_DATE": "2018-11-15T06:00:00.000Z",
		// "SALE_END_DATE": "2018-12-12T06:00:00.000Z",
		// "SALE_PRICE": "4",
		// "SALE_START_DATE": "2018-10-30T05:00:00.000Z",
		// "TIME_STAMP": "2018-06-12T05:00:00.000Z",
		// "USER_ID": "0"



//Reducer
export const inHistory = (state=initialState, action) => {
	console.log("HISTORY REDUCER");
	console.log(action.type);
	//console.log(action.payload);
	console.log(state);
	switch(action.type) {
		case "PRODUCT_IN_HISTORY":
		console.log(action.payload);
		var a = action.payload.data.map((item, i) => {
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
			console.log(a);
			return {...state, product:a};
			break;
		default:
			return state;
	}
}