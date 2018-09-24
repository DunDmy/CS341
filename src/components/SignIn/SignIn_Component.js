import React, {Component} from 'react';
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';
import {SignInSubmit} from '../../actions/SignIn_Action';

const mapStateToProps = state =>{
  return{
    userEmail: state.userInfo.userEmail,
    userPassword: state.userInfo.userPassword,
    user: state.user,
    password: state.password
  }
}

const mapDispatchToProps = (dispatch) => {
  //console.log(this.state.loginPassword);
  console.log("Submit");
  return{
    //props.signIn = (user, pass) => store.dispatch(SignInSubmit(user, pass));
    onSubmit: () => dispatch(SignInSubmit("text"))
  }
}




class SignIn extends React.Component {

  constructor(props){
    super();
    this.state = {
      // loginPassword: '',
      // loginUser: ''
    }
    // this.onPasswordChange = this.onPasswordChange.bind(this);
    // this.onEmailChange = this.onEmailChange.bind(this);
    // //this.onSubmit = this.onSubmit.bind(this);
  }

  onPasswordChange = (event) => {
    this.setState({loginPassword: event.target.value})
    console.log(this.state.loginPassword);
  }

  onEmailChange = (event) => {
    this.setState({loginUser: event.target.value})
    console.log(this.state.loginUser);
  }


	render(){

	  return (
	  	<main class="pa4 black-80">
  			<form class="measure center">
    			<fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      				<legend class="f4 fw6 ph0 mh0">Sign In</legend>
      				<div class="mt3">
        				<label class="db fw6 lh-copy f6" for="email-address">Email</label>
        				<input 
                class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address"
                onChange = {this.onEmailChange}/>
      				</div>
     				<div class="mv3">
       					<label class="db fw6 lh-copy f6" for="password">Password</label>
        				<input 
                class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password"
                onChange = {this.onPasswordChange}/>
      				</div>
    			</fieldset>
    			<div class="">
      				<input 
              class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Sign in"
              onClick= {this.props.onSubmit}/>
    			</div>
  			</form>
		</main>
		);
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);