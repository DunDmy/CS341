/*
* Author: Dmytro I Dundukov 
* SHORT DESC: SignIn component
* LONG DESC: This file contains html/css code for SignIn component
*/
import React, {Component} from 'react';

// signin component
const SignInSubmit = ({props}) => {

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
                onChange = {(event) => props.signInSubmitEmail(event.target.value)}/>
      				</div>
     				<div class="mv3">
       					<label class="db fw6 lh-copy f6" for="password">Password</label>
        				<input 
                class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password"
                onChange = {(event) => props.signInSubmitPassword(event.target.value)}/>
      				</div>
    			</fieldset>
    			<div class="">
      				<input 
              class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Sign in"
              onClick= {() => props.signInSubmit('e')}/>
    			</div>
  			</form>
		</main>
		);
	}


export default SignInSubmit;