import React, {Component} from 'react';
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';
//import scroll for search
//import Scroll from './components/Search/Scroll';
import SearchBox from './components/Search/SearchBox';
//import action for search
import {setSearchField} from './actions/actionSearch';

const mapStateToProps = state =>{
	return{
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class Search extends React.Component{
	render(){
		return(
				const {searchField, onSearchChange} = this.props;
				<SearchBox searchChange={onSearchChange}></SearchBox>
			)
	}
}



 	

