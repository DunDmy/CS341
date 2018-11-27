/* Author: Austin Vanburen, Dmytro I Dundukov
 * Description: Stores complete shopping cart information from the database.
 * Connected Actions: addToCart, populateCart
 */

//Initial State.
const initialState = {
	//State Information
	editable: false,

	//Promotional
	promoEnabled: false,

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

	//Item Information within Cart
	items : []
}

//Reducer
export default function (state=initialState, action) {
	function evalID (element) {
		return element.id === action.payload[0];
	};

	//Empty slots are denoted with a quantity of 0.
	function findEmptySlot (element) {
		return element.quantity <= 0;
	};

	switch(action.type) {
		case "SET_COSTS":
			return {...state,
				shippingCost: action.payload.shippingCost,
				taxesCost: action.payload.taxesCost,
				orderCost: action.payload.productCost,
				totalCost: action.payload.orderTotal,
				savingsTotal: action.payload.savingsTotal,
			}

		case "SET_SHIPPING":
		console.log(action.payload);
			return {...state, 
				promoEnabled: action.payload.promoEnabled,
				name: action.payload.name,
				country: action.payload.country,
				street: action.payload.street,
				city: action.payload.city,
				state: action.payload.state,
				zip: action.payload.zip,
			}

		case "SHOPPINGCART_EDIT":
			return {...state, editable: action.payload};

/************************************************************************/	
		case "CLEAR_CART_SUCCESS":
			return initialState;

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
			var i = state.items.findIndex(item => item.id === action.payload.id);
			if (i != -1) { 
				var a = state.items.slice();
				a[i].quantity++;
				return {...state, items: a};
			};

			//Item is not within cart, adds to cart.
			var a = state.items.slice(); //Clones array from state.
			a.push(action.payload);
			return {...state, items: a};

		case "ADD_TO_CART_FAILURE":
			console.log("Error: ", action.payload);
			return state;

/************************************************************************/	
		case "CHANGE_QUANTITY_SUCCESS":
			//var i = state.items.findIndex(evalID);
			var a = action.payload;
			return {...state, items: a};

		case "CHANGE_QUANTITY_FAILURE":
			console.log("Error: ", action.payload);
			return state;

/************************************************************************/	
		default:
			return state;
	};
};
