/* Author: Austin Vanburen
 * Last Edited:
 * Status:
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

//Bootstrap Components
import {Grid, Col, Row, Image, Button, Panel, Thumbnail, ButtonGroup, PageHeader} from 'react-bootstrap';
import Calendar from 'rc-calendar';

//Imported Components
import AdminSearch from './AdminSearch_Container'
import EditItemInfo from './EditItemInfo_Container'
import EditPromo from './EditPromo_Container'
import EditSale from './EditSale_Container'
import WelcomeBanner from './WelcomeBanner_Container.js';

//Imported Actions
import {addBlankItem} from '../actions/addBlankItem.js'
import {changeAdminFlux} from '../actions/changeFlux.js'
import {populateItems} from '../actions/populateItems.js'

//Access storage.
const mapStateToProps = (state) =>{
	return {
		adminStates: state.adminPageStates,
		activeItem: state.activeItem,
		items: state.searchProd.product
	}
}

//Handles actions.
const mapDispatchToProps = (dispatch) => {	
	return{
		addItem: () => dispatch(addBlankItem()),
		onFluxChange: () => dispatch(changeAdminFlux('p')),
		onFluxSaleChange: () => dispatch(changeAdminFlux('s')),
		populateItems: (res) => dispatch(populateItems(res)),
	}
}

//Renders component.
class AdminPage extends Component {
	componentDidMount() {
		axios.get('http://localhost:3000/shoppingpage/admin/products/')
			.then(res => this.props.populateItems(res))
	}

	render() {
		return (    
			<div align="center">
				{this.renderFlux()}
				<WelcomeBanner></WelcomeBanner>
				<AdminSearch></AdminSearch>
				<ButtonGroup align="center">
					<Button bsSize="small" onClick={(event) => this.onClick(event)}>Add Blank Item</Button>
					<Button bsSize="small" onClick={this.props.onFluxChange}>Set Promotional</Button>
					<Button bsSize="small" onClick={this.props.onFluxSaleChange}>Set Sale</Button>
				</ButtonGroup>
			</div>
		);
	}

	onClick(event) {
	    event.preventDefault();
	    this.props.addItem();
    }

	renderFlux() {
		if (this.props.adminStates.flux === 's') {
			return (<EditSale></EditSale>);
		} else if (this.props.adminStates.flux === 'p') {
			return (<EditPromo></EditPromo>);
		} else if (this.props.adminStates.flux === 'i') {
			return (<EditItemInfo></EditItemInfo>);
		} else {
			return(<Panel></Panel>);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);