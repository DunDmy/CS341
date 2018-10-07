/*
* Author: Dmytro I Dundukov and Tim Griffin
* SHORT DESC: Register component
* LONG DESC: This file contains html/css code for Register component
*/
import React from 'react';

// register container
const Register = ({props}) => {
	  return (
	  	<main class="pa4 black-80">
  			<form class="measure center">
    			<fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      				<legend class="f4 fw6 ph0 mh0">Register</legend>
      				<div class="mt3">
        				<label class="db fw6 lh-copy f6" for="email-address">Email</label>
        				<input 
                  class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address"
                  onChange = {(event) => props.registerEmail(event.target.value)}/>
      				</div>
     				  <div class="mv3">
       					<label class="db fw6 lh-copy f6" for="password">Password</label>
        				<input 
                  class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password"
                  onChange = {(event) => props.registerPassword(event.target.value)}/>
      			  </div>
              <div class ="mv3">
                <label class="db fw6 lh-copy f6" for="password">Confirm Password</label>
                <input 
                  class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password2"
                  onChange = {(event) => props.registerConfirmPassword(event.target.value)}/>
              </div>
    			</fieldset>
    			<div class="">
      				<input 
                class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                type="submit" 
                onClick = {() => props.registeredUser(false)}/>
    			</div>
  			</form>
		</main>
		);
}

export default Register;