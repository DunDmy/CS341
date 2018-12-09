//import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../App.css';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {updateActiveItem} from '../actions/ItemInfo_Action.js';
import {changeFlux} from '../actions/changeFlux.js';
import {onSale} from '../actions/On_Sale_Action.js'

import axios from 'axios';

//import Scroll from './components/Search/Scroll';
//import Sales from '../components/Sales/Sales_Component';

//Accesses storage.
const mapStateToProps = (state) =>{
	//console.log(state);
	return {
		product: state.onSales.product,
		activeItem: state.activeItem
	}
}

//Handles actions. Stores as a bounded prop.
const mapDispatchToProps = (dispatch) => {
	
	return {
		onItemUpdate: (item) => dispatch(updateActiveItem(item)),
		onFluxChange: () => dispatch(changeFlux('i')),
		onSale: (res) => dispatch(onSale(res))
	}
}

/*
function activateItemInfo(item, props) {
		console.log(item);
		props.onItemUpdate(item);
		props.onFluxChange();

	}
	*/

// One item component
// selected prop will be passed
const MenuItem = ({desc, saleEnd, salePrice, text, selected }) => {
  //console.log('MenuItem');
  //console.log(el);
 // console.log(selected);
  //console.log(this.props.product);
  return (
    <li key={text} className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
		<img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg"/>
		<div className="pl3 flex-auto">
			<span className="f6 db black-70">{desc}</span>
			<span className="f6 db black-70">{salePrice}</span>
			<span className="f6 db black-70">{saleEnd}</span>
		</div>
	</li>
  );
};
 
// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  //console.log(el.id);
  const {id} = el;
  const {desc} = el;
  const {saleEnd} = el;
  const {salePrice} = el;
  //console.log('Name');
  //console.log(name);
  return (
    <MenuItem
      prod = {el}
      desc={desc}
      saleEnd={saleEnd}
      salePrice={salePrice}
      text={id}
      key={id}
    />
  );
});
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
class Sales_Container extends Component {
  activateItemInfo(item) {
		console.log(item[0]);
		this.props.onItemUpdate(item[0]);
		this.props.onFluxChange();
		console.log(this.props.activeItem);
	}
  componentDidMount() {
	axios.get('http://localhost:3000/shoppingpage/productsOnSale')
		.then(res => this.props.onSale(res))
 }
  state = {
    selected: 0
  };
  
  onSelect = key => {
  	//console.log(this.props.product.id === key);
    this.setState({ selected: key });
    ////console.log("+++++++++++++++++++++++++");
    //console.log(key);
    //console.log(this.props);
    var result = this.props.product.filter(product => product.id === parseInt(key));
    //console.log(result);
    this.activateItemInfo(result);
    //console.log
  }
 
  
  render() {
    const { selected } = this.state;
    console.log('Selected');
    console.log(selected);
    console.log(this.props.product)
    // Create menu from items
   const menu = Menu(this.props.product, selected);
    //const menu = Menu(list, selected);
 
    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sales_Container );