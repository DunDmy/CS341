/*
* Author: Dmytro I Dundukov 
* SHORT DESC: SearchBox component
* LONG DESC: This file contains html/css code for SearchBox component
*/
import React from 'react';

// search component
const SearchBox = ({searchChange}) => {
	return (
		<div className='pa0 w-70'>
			<input className='pa2 w-100 b--greeen bg-lightest-blue' 
				   type='search'
				   placeholder='Search'
				   onChange={searchChange}/>
		</div>
		);
}

export default SearchBox;
