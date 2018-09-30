/* Author: Austin Vanburen
 * Last Edited: 9/23/18
 * Status: Complete.
 */

import React from 'react';
import logo from './WelcomeLogo.png';

const WelcomeLogo_Components = () => {
	return (
		<div className="WelcomeLogo">
        	<img src={logo} className="Welcome!" />
    	</div>
	);
}

export default WelcomeLogo_Components;
