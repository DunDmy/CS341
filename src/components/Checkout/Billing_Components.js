/* Author: Austin Vanburen
 * Last Edited: 11/6/18
 * Status: Complete
 * Description: Component which renders credit card and price information.
 */

//Essentials
import React from 'react';
import ReactDOM from 'react-dom';

//Imported Components
import {Grid, Col, Row, Image, Button, Panel, Thumbnail, Modal, FormControl, FormGroup,Form} from 'react-bootstrap';
import CreditCardInput from 'react-credit-card-input';

const Checkout_Components = ({props}) => {
	return (
		<Modal.Dialog autoFocus={true} backdrop="static">
			<Modal.Header>
				<Modal.Title>Checkout</Modal.Title>
				<Button bsStyle="danger" bsSize="xsmall" onClick={() => props.changeFlux('e')}>X</Button>
			</Modal.Header>
			<Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
				<div>{renderListofItems(props)}</div>
				<Grid>
					<Row>
						<p id="tpp">Items: ${props.cart.orderCost}</p>
					</Row>
					<Row>
						<p id="sah">Shipping and Handling: ${props.cart.shippingCost}</p>
					</Row>
					<Row>
						<p id="tax">Estimated Taxes: ${props.cart.taxesCost}</p>
					</Row>
					<Row>
						<h3>Order Total: ${props.cart.totalCost}</h3>
					</Row>
					<Row>
						<p>Savings: ${props.cart.totalCost}</p>
					</Row>
					<Row>
						<CreditCardInput
							ref={this.cardForm = React.createRef()}
							enableZipInput={true}
							cardCVCInputRenderer={({ handleCardCVCChange, props }) => (
								<input
							    	{...props}
							      	onChange={handleCardCVCChange(e => console.log('cvc change', e))}
							    />)}
							cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
							    <input
							    	{...props}
							    	onChange={handleCardExpiryChange(e => console.log('expiry change', e))}
							    />)}
							cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
							    <input
							    	{...props}
							      	onChange={handleCardNumberChange(e => console.log('number change', e))}
						    />)}
						/>
					</Row>
				</Grid>
			</Modal.Body>
			<Button bsSize="small" onClick={(event) => confirm(event, props, this)} ref={this.confirmButton = React.createRef()}
			>Confirm</Button>
		</Modal.Dialog>
	);
}

function confirm(event, props, page) {
	event.preventDefault();
	var valid = (
		page.cardForm.current.cardNumberField.validity.valid &
		page.cardForm.current.cardExpiryField.validity.valid &
		page.cardForm.current.cvcField.validity.valid &
		page.cardForm.current.zipField.validity.valid
	);

	var card = {
		num: page.cardForm.current.cardNumberField.value,
		expiry: page.cardForm.current.cardExpiryField.value,
		cvc: page.cardForm.current.cvcField.value,
		zip: page.cardForm.current.zipField.value
	}
	console.log(valid)
	console.log(card)

	props.setBilling(card);
	//Items = items in cart.
	props.reduceItemStock(props.items);
	props.clearCart();

	props.changeFlux('r');
}

function renderListofItems (props) {
	console.log(props)
	const itemsInCart = props.items//.filter(greaterThan0);

	return itemsInCart.map((items, i) => {
		return(
			<li key={i} className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
				<img className="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
				<div className="pl3 flex-auto">
				    <span className="f6 db black-70">{items.prodName}</span>
				</div>
				<div>
				    <a className="f6 db black-70">{items.quantity}x </a>
			    </div>
				<div>
				    <a className="f6 db black-70">{renderPrice(items, props.cart.promoEnabled)}</a>
			    </div>
			</li>
		)
	});
}


function renderPrice(item, promoEnabled) {
	if(promoEnabled && item.promo) {
		return (item.price - (item.price * item.promoPrice));
	} else if (item.sale) {
		return item.salePrice;
	} else {
		return item.price;
	}
}

const greaterThan0 = (element, index, array) => {
	return element.quantity > 0;

}

export default Checkout_Components;
