/*
* Author: Dmytro I Dundukov 
* SHORT DESC: Register container
* LONG DESC: This is the Register container that lets user to register.
*/
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import RegisterUser from '../components/Register/Register_Component';
import {registerEmail, registerPassword, registerConfirmPassword, registeredUser } from '../actions/Register_Action';

// redux syntax that is used to access props from the store object
const mapStateToProps = state =>{
  return{
    userEmail: state.userEmail,
    registerPassword: state.registerPassword,
    register: state.register
  }
}

// redux syntax that is used trigger action
const mapDispatchToProps = (dispatch) => {
  //console.log(this.state.loginPassword);
  //console.log("Register Dispatch");
  //console.log(this.props.value);
  return(
    bindActionCreators({registerEmail: registerEmail, registerPassword: registerPassword,
                                       registerConfirmPassword: registerConfirmPassword, registeredUser: registeredUser }, dispatch)
  )
}

/*
* This class renders the register container
*/
class Register extends React.Component {

    render(){
      //console.log(this.props.register.registered);
        //if(this.props.register.registered === false){
          return(
            <RegisterUser props={this.props}></RegisterUser>
          )
     
  }
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);