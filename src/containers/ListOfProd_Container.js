/*
* Author: Dmytro I Dundukov 
* SHORT DESC: List of Product container
* LONG DESC: This is the List of Product container that is displaying the list of products on the main page.
*/
import React, {Component} from 'react';
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';

class ListOfProd extends React.Component {
	
	/*
	* This function listens to the user's input entered in the search field.
	* This method dynamically schears through the list and renders the product based on the user's input.
	*/
	createListItems(){
			const filteredProduct = this.props.product.filter(product =>{
				return product.prod.toLowerCase().includes(this.props.searchField.toLowerCase())
			});
			//console.log(filteredProduct);
			//console.log(this.props.product);
			
			return filteredProduct.map((product, i) => {
			 //console.log(this.props.product.prod);
			 //console.log(this.props.searchField);
			return(
					<li key={i} className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
					  <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
					  <div className="pl3 flex-auto">
					    <span className="f6 db black-70">{product.prod}</span>
					    <span className="f6 db black-70">{product.desc}</span>
					  </div>
					  <div>
					    <a className="f6 db black-70">{product.price}</a>
					  </div>
					</li>
				)
		});
		
	}

	render(){
		return(
				<ul className="list pl0 mt0 w-70">
					{this.createListItems()}
				</ul>
			)
	}
}

// redux syntax that is used to access props from the store object
const mapStateToProps = state =>{
	return{
		product: state.searchProd.product,
		searchField: state.searchProd.searchField
	}
}

export default connect(mapStateToProps)(ListOfProd);