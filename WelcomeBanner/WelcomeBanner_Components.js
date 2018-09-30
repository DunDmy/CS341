/* Author: Austin Vanburen
 * Last Edited:
 * Status: Incomplete. TODO: -Handle username event. -FIX UI layout.
 * 
 */

//Essentials
import React from 'react';

//Bootstrap components
import {Grid, Col, Row, Image, Button} from 'react-bootstrap';

//Notes: Control structure in default function export (welcomebanner components) works! Based on state of props.
//Notes: passing props is a reliable solution.
//Notes: Figured out a reliable solution for sending data to the store.

const WelcomeBanner_Components = ({props}) => {
	if(props.user.isGuest) { return renderGuest(props) }
	else { return renderUser(props) }
}


//TODO: fill in the rest of the functions.
const renderGuest = (props) => {
	return (
		<Grid>
		  	<Row>
		    	<Col xs={6} md={3}>
		      		<Image src="./cat.png" rounded onClick={() => props.changePage('w')}/>
		    	</Col>
		    	<Col xs={6} md={3}>
		      		<Button onClick={() => props.changePage('s')}>Shop!</Button>
		    	</Col>
		    	<Col xs={6} md={3}>
		      		<Button onClick={() => props.changePage('l')}>Log In</Button>
		    	</Col>
		  	</Row>
 		</Grid>
  	);
}

const renderUser = (props) => {
	return (
		<Grid>
		  	<Row>
		    	<Col xs={6} md={3}>
		      		<Image src=".'/cat.png" rounded onClick={() => props.changePage('w')}/>
		    	</Col>
		    	<Col xs={6} md={3}>
		      		<Button onClick={() => props.changePage('s')}>Shop!</Button>
		    	</Col>
		    	<Col xs={6} md={3}>
		      		<Button>{props.user.firstName}</Button>
		    	</Col>
		  	</Row>
		</Grid>
  	);
}

export default WelcomeBanner_Components;
