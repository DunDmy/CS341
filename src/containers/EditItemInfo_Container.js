/* Author: Austin Vanburen
 * Last Edited: 9/23/18
 * Status: Incomplete.
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components
import EditItemInfo from '../components/AdminPage/EditItemInfo_Components.js'

//Imported Actions
import {saveItem} from '../actions/saveItem.js'
import {changeAdminFlux} from '../actions/changeFlux.js'
import {deleteItem} from '../actions/deleteItem.js'
import {deleteItemSuccess} from '../actions/deleteItem.js'
import {populateItems} from '../actions/populateItems.js'

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
		saveItem: saveItem, 
		changeAdminFlux: changeAdminFlux,
		deleteItem: deleteItem,
		deleteItemSuccess: deleteItemSuccess,
		populateItems: (res) => populateItems(res),
	}, dispatch);
	
}

class EditPromo_Container extends Component {
	render() {
		return (
			<EditItemInfo props={this.props}></EditItemInfo>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPromo_Container);