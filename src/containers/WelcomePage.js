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
import Welcome from './WelcomeLogo_Container.js';
import WelcomeBanner from './WelcomeBanner_Container.js';
//TODO: About info and description.

//Imported Actions

//Access storage.
const mapStateToProps = (state) =>{
	return {

	}
}

//Handles actions.
const mapDispatchToProps = (dispatch) => {
	return {
		//onEvent: (event) => dispatch(action())

	}
}

//Renders the Welcome Page.
class WelcomePage extends Component {
	render() {
		return (
			<Grid>
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
			    		<p1>SRG Buttons</p1>
			    	</Col>
			  	</Row>
			  	<Row className="show-grid">
			    	<Col xs={12} md={8}>
			    		<p1>About Info</p1>
			    	</Col>
			  	</Row>
			</Grid>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);