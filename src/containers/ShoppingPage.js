/* Author: Austin Vanburen
 * Last Edited:
 * Status:
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreates} from 'redux';

//Bootstrap Components
import {Grid, Col, Row, Image, Button, Panel, Thumbnail} from 'react-bootstrap';

//Imported Components
import WelcomeBanner from './WelcomeBanner_Container.js';
import Search from './Search_Container';


//Flux Area
import ItemInfo from './ItemInfo_Container.js';


//Imported Actions


//Access storage.
const mapStateToProps = (state) =>{
	return {
		shopStates: state.shoppingPageStates
	}
}

//Handles actions.
const mapDispatchToProps = (dispatch) => {
	return {
	}
}

//Renders component.
class ShoppingPage extends Component {
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
			    		<p1>Shopping Cart</p1>
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
		if (this.props.shopStates.flux == 'e') {
			return (<Panel></Panel>);
		} else if (this.props.shopStates.flux == 'i') {
			return (<ItemInfo></ItemInfo>);
		} else {
			return(<Panel></Panel>);
		}

	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage);