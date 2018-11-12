// Created, developed, improved, and mastered by Kenan McCracken
//...approved by Austin Vanburm & Deeeeeeemytro...
//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components
//import COMPONENT from '../components/ComponentFolder/name_Components.js'; //Imports Component 
//import UserInfo_Component from '../components/UserInfo/UserInfo_Component.js'

//Imported Actions
//import {ACTION} from '../actions/index.js'; //Imports the ACTION function from the action file.
import {UpdateUser_Action} from '../actions/UpdateUser_Action';

//Takes state (data from store) and gives component access via properties (propname:).
const mapStateToProps = state =>{
	return {
		firstName: state.activeUser.firstName,
		lastName: state.activeUser.lastName,
		email: state.activeUser.userEmail
		//country: state.activeUser.userCountry,
		//streetAddress: state.activeUser.userStreetAddress,
		//city: state.activeUser.userCity,
		//state: state.activeUser.userState,
		//zipcode: state.activeUser.userZipcode
	}
}

//Handles actions. Create an event. Pass the event to the components. Assign component event (i.e on click) to passed event.
//When event occurs, it dispatches the desired action (that we imported). The action takes a payload(data) as its parameter. 
const mapDispatchToProps = (dispatch) => {
	/*return bindActionCreators({
		UpdateUser_Action: UpdateUser_Action
	}, dispatch)
	*/
	return {

		UpdateUser_Action: (userInfo) => dispatch(UpdateUser_Action(userInfo))
	}
}

//Renders component based on data from the store. Use conditionals if you want to render something differently based on the state.
/*
class UserInfo_Container extends Component {
	handleInput() {
		var input = React.findDOMNode(this.refs.userInput)
		this.props.saveInput(input.value)
		input.value = ''
	}
	render() {
		return (
			<div>
				<input type='text' ref="userInput" />
				<button onClick={this.handleInput}>Edit</button>
				<UserInfo_Component props={this.props}></UserInfo_Component>
			</div> //where arg is the name of the arguement we created in the _Components file.
		);                                        //Passes the event into that arguement.
	}
}

*/
class UserInfo_Container extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			isEditing: false,
			user: props
		}
		//this.updateUserState = this.updateUserState.bind(this);
		this.saveUser = this.saveUser.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
	}

	// Add the other active user attributes
	componentWillReceiveProps(nextProps) {
		console.log("Current props: ", this.props)
		console.log("Next props: ", nextProps)
		if (this.props.firstName != nextProps.firstName) {
			this.setState({user: nextProps});
		}
	}

	toggleEdit() {
		this.setState({isEditing: !this.state.isEditing})
	}	

/*
	updateUserState(event) {
		const field = event.target.name;
		const user = JSON.parse(JSON.stringify(this.state.user));
		user[field] = event.target.value;
		return this.setState({user: user})
	}
*/
	saveUser() {
		var userInfo = {
			firstName: document.getElementById("firstname").value,
			lastName: document.getElementById("lastname").value,
			email: document.getElementById("email").value

		}

		//console.log(userInfo)
		//event.preventDefault();
		this.state.isEditing = false
		this.props.UpdateUser_Action(userInfo);
		this.forceUpdate();
	}

	render() {
		if (this.state.isEditing){
			return (
				<div>
					<p>First Name:</p><input id="firstname" type='text' name="firstName" defaultValue={this.state.user.firstName} 
						/>
					<p>Last Name:</p><input id="lastname" type='text' name="lastName" defaultValue={this.state.user.lastName} 
						/>
					<p>Email:</p><input id="email" type='text' name="email" defaultValue={this.state.user.email} 
						/>
					<button onClick={() => this.saveUser()}>Save</button>
				</div>
			)
		}
		return (
			<div>
				<p>{this.state.user.firstName}</p>
				<p>{this.state.user.lastName}</p>
				<p>{this.state.user.email}</p>
				<button onClick={this.toggleEdit}>Edit</button>
			</div>
		);
	}
}



//This is essential. It will connect all of your functions and classes together within this file.
//export default connect(mapStateToProps, mapDispatchToProps)(NAME_Container);
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo_Container);