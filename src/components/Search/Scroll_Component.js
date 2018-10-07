/*
* Author: Dmytro I Dundukov 
* SHORT DESC: Scroll component
* LONG DESC: This file contains html/css code for Scroll component
*/
import React from 'react';

// scroll component
const Scroll = (props) => {
	return (
		<div style={{ overflow: 'scroll', border: '5px solid black', heigh: '800px'}}
			{props.children}
		</div>
		);
}

export default Scroll;