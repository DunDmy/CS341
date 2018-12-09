/* Author: Austin Vanburen
 * Last Edited: 11/26/18
 * Status: Complete.
 * Description: Components for the welcome banner.
 */

//Essentials
import React from 'react';

//Bootstrap components
import {Image, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';
import thumbnail from './cat.png';

const WelcomeBanner_Components = ({props}) => {
	if(props.user.isGuest) { return renderGuest(props) }
	else { return renderUser(props) }
}


const renderGuest = (props) => {
	return (
		<ButtonToolbar align="center">
			<ButtonGroup align="left">
				<Image src={thumbnail} rounded onClick={() => props.changePage('w')}/>
			</ButtonGroup>

			<ButtonGroup align="right">
				<Button onClick={() => props.changePage('s')}>Shop!</Button>
				<Button onClick={() => props.changePage('r')}>Reigster!</Button>
				<Button onClick={() => props.changePage('l')}>Log In</Button>
			</ButtonGroup>
		</ButtonToolbar>
  	);
}

const renderUser = (props) => {
	return (
		<ButtonToolbar align="center">
			<ButtonGroup align="left">
				<Image src={thumbnail} rounded onClick={() => props.changePage('w')}/>
			</ButtonGroup>

			<ButtonGroup align="right">
				<Button onClick={() => props.changePage('s')}>Shop!</Button>
				<Button>{props.user.userEmail}</Button>
			</ButtonGroup>
		</ButtonToolbar>
  	);
}

export default WelcomeBanner_Components;
