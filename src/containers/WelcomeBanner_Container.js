/* Author: Austin Vanburen
 * Last Edited: 9/23/18
 * Status: Complete.
 */

//Essentials
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components
import WelcomeBanner from '../components/WelcomeBanner/WelcomeBanner_Components.js'

//Imported Actions
import {changePage} from '../actions/changePage.js'

//Accesses storage.
const mapStateToProps = (state) =>{
	return {
		user: state.activeUser,
		app: state.appStates
	}
}

//TODO: add more action functions as props.
//Handles actions. Stores as a bounded prop.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({changePage: changePage}, dispatch)
}

class WelcomeBanner_Container extends Component {
	render() {
		//console.log(this.props)
		return (
			<WelcomeBanner props={this.props}></WelcomeBanner>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeBanner_Container);