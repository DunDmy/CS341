/* Author: Austin Vanburen
 * Last Edited: 9/23/18
 * Status: Complete.
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreates} from 'redux';

//Imported Components
//import COMPONENT from '../components/ComponentFolder/name_Components.js'; //Imports Component 
import WelcomeLogo from '../components/WelcomeLogo/WelcomeLogo_Components.js'

//Imported Actions
//import {ACTION} from '../actions/index.js'; //Imports the ACTION function from the action file.
//NONE
//Accesses storage.
const mapStateToProps = (state) =>{
	return { 
	}
}

//Handles actions.
const mapDispatchToProps = (dispatch) => {
	return {

	}
}

class WelcomeLogo_Container extends Component {
	render() {
		return (
			<WelcomeLogo></WelcomeLogo>
		);
	}
}
//<WelcomeLogo></WelcomeLogo>
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeLogo_Container);