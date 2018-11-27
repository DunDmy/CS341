/* Author: Austin Vanburen
 * Last Edited:
 * Status: Incomplete. TODO: -Handle username event. -FIX UI layout.
 * 
 */

//Essentials
import React from 'react';

//Bootstrap components
import {Grid, Col, Row, Image, Button, Panel} from 'react-bootstrap';

const ShoppingCart_Components = ({props}) => {
	return (
		<Panel>
			<Panel.Heading>Shopping Cart</Panel.Heading>
			<Panel.Body>{renderComponent({props})}</Panel.Body>
 		</Panel>
	);
};

const renderComponent = ({props}) => {
	if (props.editable) {
		return (
			<div>
				{renderListofItemsEditable({props})}
				<Button onClick={(event) => save(event, props)}>Save</Button>
			</div>
		);
	} else {
		return (
			<div>
				{renderListofItems({props})}
				<Button onClick={() => props.changeToEditable(true)}>Edit</Button>
				<Button onClick={() => props.changeFlux('c')}>Checkout</Button>
			</div>
		);
	};
};


const renderListofItemsEditable = ({props}) => {
	//const itemsInCart = props.items.filter(greaterThan0);

	return props.items.map((items, i) => {
		return(
			<li key={i} className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
				<img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
				<div className="pl3 flex-auto">
				    <span className="f6 db black-70">{items.prod}</span>
				</div>
				<div>
				    <form className="pa4 black-80">
						  <div className="measure">
						    <input id={"Quantity" + items.id} className="input-reset ba b--black-20 pa2 mb2 db w-30"
						    type="number" aria-describedby="name-desc" defaultValue={items.quantity}
						    ></input>
						  </div>
					</form>
			    </div>
				<div>
				    <a className="f6 db black-70">{items.price}</a>
			    </div>
			</li>
			)
		});
}

function save(event, props) {
	event.preventDefault();

	//Updates Quantities
 	var updatedItems = props.items.map((item, i) => {
 		item.quantity = parseInt(document.getElementById("Quantity" + item.id).value, 10);
		return item;
 	}); 

 	//Filters out all products with 0 quantity. Removes from shopping cart.
 	updatedItems = updatedItems.filter(item => item.quantity > 0);

 	//Commits Changes
 	props.changeQuantity(updatedItems);
 	props.changeToEditable(false)
 	return;
};

//4 cols. Image, name, quantity and price.
const renderListofItems = ({props}) => { //Element => expression
	//const itemsInCart = props.items.filter(greaterThan0); //TODO: REMOVE. Unnessary after populate is implemented.

	return props.items.map((items, i) => {
		return(
			<li key={i} className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
				<img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
				<div className="pl3 flex-auto">
				    <span className="f6 db black-70">{items.prod}</span>
				</div>
				<div>
				    <a className="f6 db black-70">{items.quantity}x </a>
			    </div>
				<div>
				    <a className="f6 db black-70">{items.price}</a>
			    </div>
			</li>
		);
	});
};

const greaterThan0 = (element, index, array) => {
	return element.quantity > 0;
};

export default ShoppingCart_Components;
