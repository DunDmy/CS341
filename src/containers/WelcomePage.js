/* Author: Austin Vanburen
 * Last Edited:
 * Status:
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Bootstrap Components
import {Grid, Col, Row, Image, Button, Panel, Thumbnail} from 'react-bootstrap';

//Imported Components
import Welcome from './WelcomeLogo_Container.js';
import WelcomeBanner from './WelcomeBanner_Container.js';

//TODO: About info and description.
import {populateItems} from '../actions/populateItems.js'

//Imported Actions

//Access storage.
const mapStateToProps = (state) =>{
	return {

	}
}

//Handles actions.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		populateItems: populateItems,
	}, dispatch)
}

//Renders the Welcome Page.
class WelcomePage extends Component {
	/*constructor() {
		super();
		populateItems();
	}*/

	render() {
		return (
			<Grid align="center">
			  	<Row className="show-grid">
			    	<Col xs={12} md={8}>
			    		<WelcomeBanner></WelcomeBanner>
			    	</Col>
			  	</Row>
			  	<Row className="show-grid">
			    	<Col xs={12} md={8}>
			    		<Welcome></Welcome>
			    	</Col>
			  	</Row>
			  	<Row className="show-grid">
			    	<Col xs={12} md={8}>
			    		<p>SRG Buttons</p>
			    	</Col>
			  	</Row>
			  	<Row className="show-grid">
			    	<Col xs={12} md={8}>
			    		<p>About Info</p>
			    	</Col>
			  	</Row>
			</Grid>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);