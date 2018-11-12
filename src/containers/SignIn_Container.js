/*
* Author: Dmytro I Dundukov 
* SHORT DESC: SignIn container
* LONG DESC: This is the SignIn container that lets user to signin.
*/
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {signInSubmitEmail, signInSubmitPassword, signInSubmit} from '../actions/SignIn_Action';
import {changePage} from '../actions/changePage';
import Sign from '../components/SignIn/SignIn_Component';

// redux syntax that is used to access props from the store object
const mapStateToProps = state =>{
  return{
    user: state.signIn.user,
    password: state.signIn.password
  }
}

// redux syntax that is used trigger action
const mapDispatchToProps = (dispatch) => {
  //console.log(this.state.loginPassword);
  console.log("Submit");
  //console.log(this.props.value);
  return(
    bindActionCreators({signInSubmit: signInSubmit, 
                        signInSubmitEmail: signInSubmitEmail, 
                        signInSubmitPassword: signInSubmitPassword,
                        changePage: changePage,
                      }, dispatch)
  )
}

/*
* This class renders the SignIn container
*/
class SignIn extends React.Component {
	render(){
    return(
       <Sign props={this.props}></Sign>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);