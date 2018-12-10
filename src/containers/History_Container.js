/*
* Author: Dmytro I Dundukov 
* SHORT DESC: List of Product container
* LONG DESC: This is the List of Product container that is displaying the list of products on the main page.
*/
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {updateActiveItem} from '../actions/ItemInfo_Action.js'
import {inHistory} from '../actions/History_Action.js'
import axios from 'axios';

const mapStateToProps = state =>{
	return{
		product: state.inHistory.product,
		//product: state.searchProd.product,
		user: state.activeUser
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		//TODO: item passed is stated as 0.
		inHistory: (res) => dispatch(inHistory(res))
	}
}

class History extends React.Component {

	 componentDidMount() {
	 	var url = 'http://localhost:3000/shoppingpage/shoppingcart/' + this.props.user.id;
	 	console.log(this.props);
	 	console.log(url);
		axios.get(url)
				.then(res => this.props.inHistory(res))
 	}

	createListItems(){
			
			console.log('History');
			console.log(this.props.product);
			
			return this.props.product.map((product, i) => {
			 //console.log(this.props.product.prod);
			 //console.log(this.props.searchField);
				return(
					<li key={i} className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
					  <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg"/>
					  <span className="f6 db black-70">{product.salePrice}</span>
					</li>
				)
		});
		
	}
	render(){
		console.log(this.props);
		return(
				<ul className="list pl0 mt0 w-70">
					{this.createListItems()}
				</ul>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(History);