/* Author: Austin Vanburen
 * Last Edited: 11/6/18
 * Status: Complete.
 * Description: Container for the billing information component.
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components
import Billing from '../components/Checkout/Billing_Components.js'

//Imported Actions
import {changeFlux} from '../actions/changeFlux.js'
import {setShipping} from '../actions/setShipping.js'
import {setBilling} from '../actions/setBilling.js'
import {reduceItemStock} from '../actions/reduceItemStock.js'
import {clearCart} from '../actions/ShoppingCart_Action.js'

//Accesses storage.
const mapStateToProps = (state) =>{
	return {
		item: state.activeItem,
		flux: state.shoppingPageStates,
		cart: state.cart,
		items: state.searchProd.product
	}
}

//Handles actions. Stores as a bounded prop.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		clearCart: clearCart,
		reduceItemStock: reduceItemStock,
		changeFlux: changeFlux,
		evalShipping: setShipping,
		setBilling: setBilling
	}, dispatch)
	
}

class Billing_Container extends Component {
	render() {
		return (
			<Billing props={this.props}></Billing>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Billing_Container);