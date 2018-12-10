/* Author: Austin Vanburen
 * Last Edited: 11/26/18
 * Status: Complete.
 * Description: Components for the welcome banner.
 */

//Essentials
import React from 'react';

//Bootstrap components
import {Image, Button, ButtonGroup, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
import UserInfo from '../../containers/UserInfo_Container.js'
import thumbnail from './cat.png';

const WelcomeBanner_Components = ({props}) => {
	if(props.user.isGuest) { return renderGuest(props) }
	else { return renderUser(props) }
}


const renderGuest = (props) => {
	//returned component
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
	//For the sign out button.
	function handleSignOut(props, event) {
		event.preventDefault();
		//TODO: SAVE USER CART.
		props.signOut();
		props.changePage('w');
	}

	function onToggle(isOpen, event, { source }) { //TODO:
		//console.log(source) //select or click
		//console.log(event)
		//console.log(isOpen)
		//console.log(document.getElementById("user-info-button-toolbar"))
		//console.log(this)
		//console.log(this);
		//this.children[0].setState({isOpen: true});
		//source.open = true;
		//isOpen=true;
		//this.children[0].props.open = true;
		if (source === 'select') {
			console.log(this.children[0].props.open)
		}
	}

	//returned component
	return (
		<ButtonToolbar align="center">
			<ButtonGroup align="left">
				<Image src={thumbnail} rounded onClick={() => props.changePage('w')}/>
			</ButtonGroup>

			<ButtonGroup align="right">
				<Button onClick={() => props.changePage('s')}>Shop!</Button>
				<DropdownButton
					onToggle={onToggle}
					title={props.user.userEmail}
					id="user-info-button-toolbar"
				>
					<MenuItem><UserInfo></UserInfo></MenuItem>
				</DropdownButton>
				<Button onClick={(event) => handleSignOut(props, event)}>Sign Out</Button>
			</ButtonGroup>
		</ButtonToolbar>
  	);
}

export default WelcomeBanner_Components;
