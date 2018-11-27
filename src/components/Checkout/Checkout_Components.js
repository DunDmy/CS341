/* Author: Austin Vanburen
 * Last Edited: 11/6/18
 * Status: Complete.
 * Description: Component which renders checkout information. Information includes
 * details such as shipping address and user identity.
 */

//Essentials
import React from 'react';
import ReactDOM from 'react-dom';

//Imported omponents
import {Grid, Col, Row, Image, Button, Panel, Thumbnail, Modal, FormControl, FormGroup,Form} from 'react-bootstrap';
//import ScrollArea from 'react-scrollbar';

const Checkout_Components = ({props}) => {
	return (
		<Modal.Dialog autoFocus={true} backdrop="static" enforceFocus={true}>
			<Modal.Header>
				<Modal.Title>Checkout</Modal.Title>
				<Button bsStyle="danger" bsSize="xsmall" onClick={() => props.changeFlux('e')}>X</Button>
			</Modal.Header>
			<Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
					<Form horizontal>
						<FormGroup controlId="">
							<Col md={3}>
		      					Name:
		    				</Col>
		   					<Col md={6}>
		    					<FormControl 
			    					type="text" 
			    					placeholder={props.user.firstName} 
			    					defaultValue={props.user.firstName}
			    					inputRef={this.nameForm = React.createRef()}
		    					/>
		    				</Col>
						</FormGroup>

						<FormGroup controlId="">
							<Col md={3}>
		      					Country:
		    				</Col>
		   					<Col md={6}>
		    					<FormControl 
			    					type="text" 
			    					placeholder=""
			    					value="United States of America"
			    					inputRef={this.countryForm = React.createRef()}
		    					/>
		    				</Col>
						</FormGroup>

						<FormGroup controlId="">
							<Col md={3}>
		      					Street Address:
		    				</Col>
		   					<Col md={6}>
		    					<FormControl 
			    					type="text" 
			    					placeholder="1818 Madison St." 
			    					defaultValue=""
			    					inputRef={this.streetForm = React.createRef()}
		    					/>
		    				</Col>
						</FormGroup>

						<FormGroup controlId="">
							<Col md={3}>
		      					City:
		    				</Col>
		   					<Col md={6}>
		    					<FormControl 
			    					type="text" 
			    					placeholder="" 
			    					defaultValue=""
			    					inputRef={this.cityForm = React.createRef()}
		    					/>
		    				</Col>
						</FormGroup>

						<FormGroup controlId="">
		    				<Col md={3}>
		      					State:
		    				</Col>
		   					<Col md={6}>
		    					<FormControl 
			    					type="text" 
			    					placeholder="" 
			    					defaultValue=""
			    					inputRef={this.stateForm = React.createRef()}
		    					/>
		    				</Col>
						</FormGroup>

						<FormGroup controlId="">
		    				<Col md={3}>
		      					Zip:
		    				</Col>
		   					<Col md={6}>
		    					<FormControl 
			    					type="text" 
			    					placeholder="" 
			    					defaultValue=""
			    					inputRef={this.zipForm = React.createRef()}
		    					/>
		    				</Col>
						</FormGroup>

						<FormGroup controlId="">
		    				<Col md={3}>
		      					Promo:
		    				</Col>
		   					<Col md={6}>
		    					<FormControl 
			    					type="text" 
			    					placeholder="" 
			    					defaultValue=""
			    					inputRef={this.promoForm = React.createRef()}
		    					/>
		    				</Col>
						</FormGroup>
					</Form>
			</Modal.Body>
			<Button bsSize="small" onClick={(event) => test(event, props, this)}>Continue</Button>
		</Modal.Dialog>
	);
}

function test(event, props, page) {
		event.preventDefault();

		//Evalates promoCode.
		var enteredPromo = page.promoForm.current.value;
		var promo = props.items[0].promoCode;
		console.log(enteredPromo);
		console.log(promo);

		var enablePromo = false;
		if (promo === enteredPromo) { //TODO: CHECK for date.
			enablePromo = true;
		}

		var shippingInfo = {
			promoEnabled: enablePromo,

			name: page.nameForm.current.value,
			country: page.countryForm.current.value,
			street: page.stateForm.current.value,
			city: page.cityForm.current.value,
			state: page.stateForm.current.value,
			zip: page.zipForm.current.value,
		}
		props.evalShipping(shippingInfo)

		var costInfo = {
			shippingCost: shippingCost(shippingInfo),
			taxesCost: taxesCost(props),
			productCost: totalProductCost(props, enablePromo),
			orderTotal: 0.00,
			savingsTotal: savingsTotal(props),
		}
		costInfo.orderTotal = costInfo.shippingCost + costInfo.taxesCost + costInfo.productCost;
		props.setCosts(costInfo);

		props.changeFlux('b');
}

function shippingCost(shippingInfo) {

	return 0.00;
}

function taxesCost(props) {
	
	return 1.00;
}

function totalProductCost(props, promoEnabled) {
	const itemsInCart = props.items//.filter(greaterThan0);
	console.log(props.cart)
	//console.log("PromoValid?", props.cart.promoEnabled)

	var tpp = 0.00;
	itemsInCart.map((item, i) => {
		const quantity = item.quantity;

		//Promo Item
		if (promoEnabled && item.promo) {
			tpp += (item.price - (item.price * item.promoPrice)) * quantity;
		
		//Sale Item
		} else if (item.sale) {
			tpp += item.salePrice * quantity;
		
		//Default Value
		} else {
			tpp += item.price * quantity;
		}

		return item;
	})
	return tpp;
}

function savingsTotal(props) {
	return 0;
}

const greaterThan0 = (element, index, array) => {
	return element.quantity > 0;

}

export default Checkout_Components;
