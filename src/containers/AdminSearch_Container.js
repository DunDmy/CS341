/*
* Author: Dmytro I Dundukov 
* SHORT DESC: Search container
* LONG DESC: This is the Search container that lets user to search the item.
*/
import React, {Component} from 'react';
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';
//import scroll for search
//import Scroll from './components/Search/Scroll';
import SearchBox from '../components/AdminPage/SearchBox_Component';
//import action for search
import {setSearchField} from '../actions/Search_Action';
//list of prod
import ListOfProd from './AdminListOfProd_Container';
import ScrollArea from 'react-scrollbar';

// redux syntax that is used to access props from the store object
const mapStateToProps = state =>{
	return{
		product: state.product,
		searchField: state.searchField
	}
}

// redux syntax that is used trigger action
const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

/*
* This class uses the List of Product container and the Search component to create a dynamic search
*/
class Search extends React.Component{
	render(){
		const {searchField, onSearchChange} = this.props;


		return(
			<div className = 'fl w-100 pa2' align="center">
				<SearchBox searchChange={onSearchChange}></SearchBox>
				<ScrollArea speed={0.8} className="area" contentClassName="content" horizontal={false}>
					<ListOfProd></ListOfProd>
				</ScrollArea>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);



 	

