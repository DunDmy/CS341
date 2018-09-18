// import Component 
// hook it up to data store
import React, {Component} from 'react';
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';

class ListOfProd extends React.Component {
	createListItems(){
		return this.props.product.map((product) => {
			return(
				<li key={product.id}>{product.prod}</li>
				)
		});
	}

	render(){
		return(
			<ul>
				{this.createListItems()}
			</ul>
			)
	}
}

//takes a state and passes it to component as property. passes in to component as prop
function mapStateToProps(state) {
	return{
		product: state.product
	}
}

export default connect(mapStateToProps)(ListOfProd);