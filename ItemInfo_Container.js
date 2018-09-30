/* Author: Austin Vanburen
 * Last Edited: 9/23/18
 * Status: Incomplete.
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components
import ItemInfo from '../components/ItemInfo/ItemInfo_Components.js'

//Imported Actions
//import {changePage} from '../actions/changePage.js'
import {addToCart} from '../actions/addToCart.js'
import {changeFlux} from '../actions/changeFlux.js'

//Accesses storage.
const mapStateToProps = (state) =>{
	return {
		item: state.activeItem,
		flux: state.shoppingPageStates //TODO: Does not work.
	}
}

//TODO: add more action functions as props.
//Handles actions. Stores as a bounded prop.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({addToCart: addToCart, changeFlux: changeFlux}, dispatch)
	
}

class ItemInfo_Container extends Component {
	render() {
		//console.log(this.props.flux)
		return (
			<ItemInfo props={this.props}></ItemInfo>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemInfo_Container);