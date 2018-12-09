/* Author: Austin Vanburen, Dmytro Dundukov
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
import {setTax} from '../actions/SetTax_Action.js'

import axios from 'axios';

//Accesses storage.
const mapStateToProps = (state) =>{
	console.log(state);
	return {
		item: state.activeItem,
		flux: state.shoppingPageStates,
		items: state.cart.items,
		user: state.activeUser,
		cart: state.cart,
		tax: state.cart.tax
	}
}

//Handles actions.
const mapDispatchToProps = (dispatch) => {
	return( 
	bindActionCreators({
		changeFlux: changeFlux,
		evalShipping: setShipping,
		setCosts: setCosts,
		setTax: setTax
	}, dispatch))
	// changeFlux: () => dispatch(changeFlux('i'));
	// evalShipping: (info) => dispatch(setShipping(info));
	// setCosts: (cost) => dispatch(setCosts(cost));
	// setTax: (tax) => dispatch(setTax(tax))
}

class Checkout_Container extends Component {
	  constructor(props) {
   		super(props);
    	this.onTargetSelect = this.onTargetSelect.bind(this);

    	this.state = { title: 'Select Target',
    	tartget: this.onTargetSelect };
  	}

  	onTargetSelect(target) {
    	this.setState({ title: target });
    	//this.props.passTargetToParent(target);
  	}

	componentWillMount() {
		axios.get('http://localhost:3000/shoppingpage/shoppingcart/tax/states')
			.then(res => this.props.setTax(res))
			//.self(this.props.setTax)
 	}
	render() {
		console.log("PROPS");
		console.log(this.props);
		return (
			<Checkout props={this.props} state={this.state} target={this.onTargetSelect}></Checkout>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout_Container);