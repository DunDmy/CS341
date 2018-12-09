/* Author: Dmytro Dundukov
 * Last Edited:
 * Status: Incomplete. TODO:
 */

//Initial State. Default user is a guest.
const initialState = {
	product : []
}

//Reducer
export const onSales = (state=initialState, action) => {
	console.log(action);
	switch(action.type) {
		case "PRODUCT_ON_SALE":
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
			return {...state, product:a};
			break;
		default:
			return state;
	}
}