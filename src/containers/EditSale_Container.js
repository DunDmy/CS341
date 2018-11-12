/* Author: Austin Vanburen
 * Last Edited: 11/17/18
 * Description: Container for the EditSale components. 
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components
import EditSale from '../components/AdminPage/EditSale_Components.js'

//Imported Actions
import {activateSale} from '../actions/activateSale.js'
import {changeAdminFlux} from '../actions/changeFlux.js'


//Accesses storage.
const mapStateToProps = (state) =>{
	return {
		item: state.activeItem,
	}
}

//TODO: add more action functions as props.
//Handles actions. Stores as a bounded prop.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		changeAdminFlux: changeAdminFlux,
		activateSale: activateSale,
	}, dispatch);
}

class EditSale_Container extends Component {
	render() {
		return (
			<EditSale props={this.props}></EditSale>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSale_Container);