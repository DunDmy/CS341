/* Author: Austin Vanburen, Dmytro I Dundukov
 * Description: Stores complete shopping cart information from the database.
 * Connected Actions: addToCart, populateCart
 */

//Initial State.
const initialState = {
	//State Information
	editable: false,

	//Cost Information
	shippingCost: 0.00,
	taxesCost: 0.00,
	orderCost: 0.00,
	totalCost: 0.00,
	savingsTotal: 0.00,

	//User Information
	name: "NA",
	country: "United States of America",
	street: "NA",
	city: "NA",
	state: "NA",
	zip: "NA",

	//Item Information within Cart. Quantity of 0 denotes empty slot.
	items : [
		{	
			id: 0,
			prod: "PRODUCTNAME",
			price: "0.00",
			promoPrice: "0.00",
			salePrice: "0.00",
			desc: "NA",
			image: "./thumbnail.png",
			promo: false,
			sale: false,
			quantity: 0,
			numAvail: 1
		},
		{
			id: 1,
			prod: "PRODUCTNAME",
			price: "0.00",
			promoPrice: "0.00",
			salePrice: "0.00",
			desc: "NA",
			image: "./thumbnail.png",
			promo: false,
			sale: false,
			quantity: 0,
			numAvail: 1
		},
		{
			id: 2,
			prod: "PRODUCTNAME",
			price: "0.00",
			promoPrice: "0.00",
			salePrice: "0.00",
			desc: "NA",
			image: "./thumbnail.png",
			promo: false,
			sale: false,
			quantity: 0,
			numAvail: 1
		},
		{
			id: 3,
			prod: "PRODUCTNAME",
			price: "0.00",
			promoPrice: "0.00",
			salePrice: "0.00",
			desc: "NA",
			image: "./thumbnail.png",
			promo: false,
			sale: false,
			quantity: 0,
			numAvail: 1
		},
		{
			id: 4,
			prod: "PRODUCTNAME",
			price: "0.00",
			promoPrice: "0.00",
			salePrice: "0.00",
			desc: "NA",
			image: "./thumbnail.png",
			promo: false,
			sale: false,
			quantity: 0,
			numAvail: 1
		}

	]
}

//Reducer
export default function (state=initialState, action) {
	function evalID (element) {
		return element.id == action.payload[0];
	};

	//Empty slots are denoted with a quantity of 0.
	function findEmptySlot (element) {
		return element.quantity <= 0;
	};

	switch(action.type) {
		case "SHOPPINGCART_EDIT":
			return {...state, editable: action.payload};

/************************************************************************/	
		case "CLEAR_CART_SUCCESS":
			return action.payload;

		case "CLEAR_CART_FAILURE":
			console.log("Error: ", action.payload);
			return state;

/************************************************************************/	
		case "POPULATE_CART_SUCCESS":
			return {...state, items: action.payload};

		case "POPULATE_CART_FAILURE":
			console.log("Error: ", action.payload);
			return state;

/************************************************************************/	
		case "ADD_TO_CART_SUCCESS":
			//Given the item is already within the shopping cart, increments quantity and returns.
			var i = state.items.findIndex(evalID);
			if (i != -1) { 
				let a = state.items.slice();
				a[i].quantity++;
				return {...state, items: a};
			};

			//Item is not within cart, adds to cart.
			//i = state.items.findIndex(findEmptySlot);
			//a[i] = action.payload;
			let a = state.items.slice(); //Clones array from state.
			a.push(action.payload);
			return {...state, items: a};

		case "ADD_TO_CART_FAILURE":
			console.log("Error: ", action.payload);
			return state;

/************************************************************************/	
		case "QUANTITY_CHANGE_SUCCESS":
			//var i = state.items.findIndex(evalID);
			let b = state.items.slice();

			//If item is 0, then it is removed from the shopping cart.
			//if (action.payload[1] <= 0) { b.slice(i, 1); }
			//else if (action.payload[1] > b[i].numAvail) {console.log("Error, number avail does not meet desired quantity.")}
			//else { b[i].quantity = action.payload[1]; }
			return {...state, items: b};

		case "QUANTITY_CHANGE_FAILURE":
			console.log("Error: ", action.payload);
			return state;

/************************************************************************/	
		default:
			return state;
	};
};
