/*
* Author: Dmytro I Dundukov 
* SHORT DESC: List of Product container
* LONG DESC: This is the List of Product container that is displaying the list of products on the main page.
*/
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {updateActiveItem} from '../actions/ItemInfo_Action.js'
import {changeFlux} from '../actions/changeFlux.js'

const mapStateToProps = state =>{
	return{
		product: state.searchProd.product,
		searchField: state.searchProd.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		//TODO: item passed is stated as 0.
		onItemUpdate: (item) => dispatch(updateActiveItem(item)),
		onFluxChange: () => dispatch(changeFlux('i'))
	}
}

class ListOfProd extends React.Component {
	
	/*
	* This function listens to the user's input entered in the search field.
	* This method dynamically schears through the list and renders the product based on the user's input.
	*/

	activateItemInfo(item) {
		//console.log(item);
		this.props.onItemUpdate(item);
		this.props.onFluxChange();

	}

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
					  <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" onClick={() => this.activateItemInfo(product)}/>
					  <div className="pl3 flex-auto">
					    <span className="f6 db black-70">{product.prod}</span>
					    <span className="f6 db black-70">{product.desc}</span>
					  </div>
					  {this.renderPrice(product)}
					</li>
				)
		});
		
	}

	renderPrice(product) {
		if(product.sale) {
			return (
				<div>
					<strike><span className="f6 db black-70">{product.price}</span></strike>
					<span className="f6 db black-70">{product.salePrice}</span>
					<span className="f6 db black-70">...on sale</span>
				</div>
			);
		} else if(product.promo) { //TODO: MAKE IT SO IT CHECKS FOR WITHIN THE DATE.
			return (
				<div>
					<strike><span className="f6 db black-70">{product.price}</span></strike>
					<span className="f6 db black-70">{product.price - (product.price * product.promoPrice)}</span>
					<span className="f6 db black-70">...with promo-code: {product.promoCode}</span>
				</div>
			);
		} else {
			return (
				<div>
					<span className="f6 db black-70">{product.price}</span>
				</div>
			);
		}
	}

	render(){
		return(
				<ul className="list pl0 mt0 w-70">
					{this.createListItems()}
				</ul>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfProd);