/*
* Author: Dmytro I Dundukov, Austin Vanburen
* SHORT DESC: List of Product container
* LONG DESC: This is the List of Product container that is displaying the list of products on the main page.
*/

//Essentials
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//Imported Actions
import {updateActiveItem} from '../actions/ItemInfo_Action.js'
import {changeAdminFlux} from '../actions/changeFlux.js'

const mapStateToProps = state =>{
	return{
		product: state.searchProd.product,
		searchField: state.searchProd.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onItemUpdate: (item) => dispatch(updateActiveItem(item)),
		onFluxChange: () => dispatch(changeAdminFlux('i'))
	}
}

class ListOfProd extends React.Component {
	
	/*
	* This function listens to the user's input entered in the search field.
	* This method dynamically schears through the list and renders the product based on the user's input.
	*/

	activateItemInfo(item) {
		this.props.onItemUpdate(item);
		this.props.onFluxChange();
	}

	createListItems(){
		const filteredProduct = this.props.product.filter(product =>{
			return product.prod.toLowerCase().includes(this.props.searchField.toLowerCase())
		});

		return filteredProduct.map((product, i) => {
			return(
				<li key={i} className="flex items-center lh-copy pa3 ph0-l bb b--black-10 w-100">
				  	<img valign="middle" className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" onClick={() => this.activateItemInfo(product)}/>
				  	<span valign="middle" align="left" className="pl3 flex-auto">{product.prod}</span>
				  	<div>
				    	<span className="f6 db black-70 mr3">Price: {product.price}</span>
				    	<span className="f6 db black-70 mr3">Stock: {product.numAvail}</span>
				  	</div>
				  	<div>
				    	<span className="f6 db black-70 mr3">Promo: {product.promo.toString()}</span>
				    	<span className="f6 db black-70 mr3">P-Price: {product.price - (product.price * product.promoPrice)}</span>
				  	</div>
				  	<div>
				    	<span className="f6 db black-70 mr3">Promo: {product.sale.toString()}</span>
				    	<span className="f6 db black-70 mr3">P-Price: {product.salePrice}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListOfProd);