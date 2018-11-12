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
import Review from '../components/Checkout/Review_Components.js'

//Imported Actions
import {changeFlux} from '../actions/changeFlux.js'

//Accesses storage.
const mapStateToProps = (state) =>{
	return {
		flux: state.shoppingPageStates,
		cart: state.cart,
	}
}

//Handles actions. Stores as a bounded prop.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		changeFlux: changeFlux,
	}, dispatch)
	
}

class Review_Container extends Component {
	render() {
		return (
			<Review props={this.props}></Review>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Review_Container);