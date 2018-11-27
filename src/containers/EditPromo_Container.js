/* Author: Austin Vanburen
 * Last Edited: 9/23/18
 * Status: Incomplete.
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components
import EditPromo from '../components/AdminPage/EditPromo_Components.js'

//Imported Actions
import {activatePromotion} from '../actions/activatePromotion.js'
import {changeAdminFlux} from '../actions/changeFlux.js'
//import {setPromoPrice} from '../actions/setPromoPrice.js'

//Accesses storage.
const mapStateToProps = (state) =>{
	return {
		item: state.activeItem,
		items: state.searchProd.product,
	}
}

//TODO: add more action functions as props.
//Handles actions. Stores as a bounded prop.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		changeAdminFlux: changeAdminFlux,
		activatePromotion: activatePromotion,
		//setPromoPrice: setPromoPrice,
	}, dispatch);
}

class EditPromo_Container extends Component {
	render() {
		return (
			<EditPromo props={this.props}></EditPromo>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPromo_Container);