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
import {signOutSuccess} from '../actions/signOut.js'

//Accesses storage.
const mapStateToProps = (state) =>{ //TODO: SAVE CART ACTION
	return {
		user: state.activeUser,
		app: state.appStates
	}
}

//Handles actions. Stores as a bounded prop.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({changePage: changePage, signOut: signOutSuccess,
	}, dispatch)
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