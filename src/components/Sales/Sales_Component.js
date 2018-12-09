import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import axios from 'axios';
import '../../App.css';

// list of items
const list = [ ];
const lst = [{item: 'hello'}];

//One item component
//selected prop will be passed
const MenuItem = ({text}) => {
  console.log('MenuItem');
  console.log({text});
  return (
    <div
      className="menu-item"
    >
    <img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" height="20" width="20"/>
      {text}
    </div>
  );
};
//All items component
//! add unique key
//if(list.length > 1){
	const Menu = (list) => list.map(el => {
  		const { name } = el;
 		console.log('NAME');
 		console.log(name);
  		return (
    		<MenuItem 
      			text={name}>
    		</MenuItem>
  		);
	});	
//} 



const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const Sales = ({props})=> {
	
	function activateItemInfo(props, item) {
		//console.log(item);
		props.onItemUpdate(props);
		props.onFluxChange();

	}
   console.log('INSIDE LIST');
   console.log(props);
  
   //list.push(props.product.filter(product => product.sale === true));
   
   
  // console.log(list);
	// state = {
 //    	selected: 0
 //  	};
  
 //  onSelect = key => {
 //    this.setState({ selected: key });
 //  }
 	//console.log(list[0]);
   //const { selected } = this.state;
    // Create menu from item
   const menu = Menu(props.product);
  // const menu = Menu(list, selected);
   console.log('INSIDE SALES_COMPONENT');
   console.log(props.product);
   console.log(menu);
   //console.log(list[0]);


    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          //selected={selected}
          //onSelect={() => activateItemInfo(props.product[0])} //TOOD: change to a single item.
        />
      </div>
    );
}

export default Sales; 