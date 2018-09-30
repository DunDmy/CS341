//This is a template for a container class.

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

//Imported Actions
//import {ACTION} from '../actions/index.js'; //Imports the ACTION function from the action file.

//Takes state (data from store) and gives component access via properties (propname:).
const mapStateToProps = (state) =>{
	return {

	}
}

//Handles actions. Create an event. Pass the event to the components. Assign component event (i.e on click) to passed event.
//When event occurs, it dispatches the desired action (that we imported). The action takes a payload(data) as its parameter. 
const mapDispatchToProps = (dispatch) => {
	return {
		ewe//onEvent: (event) => dispatch(action())

	}
}

//Renders component based on data from the store. Use conditionals if you want to render something differently based on the state.
class NAME_Container extends Component {
	render() {
		return (
			<COMPONENT arg={onEvent}></COMPONENT> //where arg is the name of the arguement we created in the _Components file.
		);                                        //Passes the event into that arguement.
	}
}

//This is essential. It will connect all of your functions and classes together within this file.
//export default connect(mapStateToProps, mapDispatchToProps)(NAME_Container);