/* Author: Austin Vanburen
 * Last Edited:
 * Status:
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreates} from 'redux';
import axios from 'axios';

//Bootstrap Components
import {Grid, Col, Row, Image, Button, Panel, Thumbnail} from 'react-bootstrap';

//Imported Components
import WelcomeBanner from './WelcomeBanner_Container.js';
import Search from './Search_Container';
import ShoppingCart from './ShoppingCart_Container.js';

//Flux Area Components
import ItemInfo from './ItemInfo_Container.js';
import Checkout from './Checkout_Container.js';
import Billing from './Billing_Container.js';
import Review from './Review_Container.js';

//Imported Actions
import {populateItems} from '../actions/populateItems.js'

//Access storage.
const mapStateToProps = (state) =>{
	return {
		shopStates: state.shoppingPageStates
	}
}

//Handles actions.
const mapDispatchToProps = (dispatch) => {
	return{
		populateItems: (res) => dispatch(populateItems(res)),
	}
}

//Renders component.
class ShoppingPage extends Component {
	componentDidMount() {
		axios.get('http://localhost:3000/shoppingpage/admin/products/')
			.then(res => this.props.populateItems(res))
	}
	render() {
		return (
			<Grid>
			  	<Row className="show-grid">
			    	<Col xs={12} md={8}>
			    		<WelcomeBanner></WelcomeBanner>
			    	</Col>
			  	</Row>
			  	<Row className="show-grid">
			    	<Col xs={12} md={6}>
			    		<Search></Search>
			    	</Col>
			    	<Col xs={12} md={10}>
			    		{this.renderFlux()}
			    	</Col>
			    	<Col xs={12} md={8}>
			    		<ShoppingCart></ShoppingCart>
			    	</Col>
			  	</Row>
			  	<Row className="show-grid">
			    	<Col xs={12} md={8}>
			    		<p1>Promotional Stuff</p1>
			    	</Col>
			  	</Row>
			</Grid>
		);                                   
	}

	renderFlux() {
		if (this.props.shopStates.flux === 'r') {
			return (<Review></Review>);
		} else if (this.props.shopStates.flux === 'b') {
			return (<Billing></Billing>);
		} else if (this.props.shopStates.flux === 'c') {
			return (<Checkout></Checkout>);
		} else if (this.props.shopStates.flux === 'i') {
			return (<ItemInfo></ItemInfo>);
		} else {
			return(<Panel></Panel>);
		}

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage);