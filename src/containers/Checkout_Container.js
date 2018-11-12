/* Author: Austin Vanburen
 * Last Edited: 11/6/18
 * Status: Complete.
 * Description: Container for the checkout component.
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components
import Checkout from '../components/Checkout/Checkout_Components.js'

//Imported Actions
import {changeFlux} from '../actions/changeFlux.js'
import {setShipping} from '../actions/setShipping.js'
import {setCosts} from '../actions/setCosts.js'

//Accesses storage.
const mapStateToProps = (state) =>{
	return {
		item: state.activeItem,
		flux: state.shoppingPageStates,
		items: state.cart.items,
		user: state.activeUser,
		cart: state.cart,

	}
}

//Handles actions.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		changeFlux: changeFlux,
		evalShipping: setShipping,
		setCosts: setCosts
	}, dispatch)
	
}

class Checkout_Container extends Component {
	render() {
		return (
			<Checkout props={this.props}></Checkout>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout_Container);