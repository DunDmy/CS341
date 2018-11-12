/* Author: Austin Vanburen
 * Last Edited: 9/23/18
 * Status: Incomplete.
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components
import ShoppingCart from '../components/ShoppingCart/ShoppingCart_Components.js'

//Imported Actions
import {changeQuantity} from '../actions/ShoppingCart_Action.js'
import {changeToEditable} from '../actions/ShoppingCart_Action.js'
import {changeFlux} from '../actions/changeFlux.js'	

//Accesses storage.
const mapStateToProps = (state) =>{
	return {
		editable: state.cart.editable,
		items: state.cart.items,
	}
}

//Handles actions. Stores as a bounded prop.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({changeQuantity: changeQuantity,
								changeToEditable: changeToEditable,
								changeFlux: changeFlux}, dispatch)
}

class ShoppingCart_Container extends Component {
	render() {
		return (
			<ShoppingCart props={this.props}></ShoppingCart>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart_Container);