/* Author: Austin Vanburen, Dmytro Dundukov
 * Last Edited: 11/6/18
 * Status: Complete.
 * Description: Component which renders checkout information. Information includes
 * details such as shipping address and user identity.
 */

//Essentials
import React from 'react';
import ReactDOM from 'react-dom';

//Improting Material-UI lib for Sales Tax comp
//import DropDownMenu from 'material-ui/DropDownMenu';
//import MenuItem from 'material-ui/MenuItem';
//Imported omponents
import {Grid, SplitButton, MenuItem, Col, Row, Image, Button, Panel, Thumbnail, Modal, FormControl, FormGroup,Form} from 'react-bootstrap';
//import ScrollArea from 'react-scrollbar';

const Checkout_Components = ({props, state, target}) => {
	console.log("INSIDE CHECKOUT");
	console.log(props);
	console.log(target);

	const item = [];
	for( let i = 0; i < 100; i++){
		item.push(<MenuItem value={i} key={i} primaryText={'Item ${i}'} />);
	}


	function handleChange (event, index, value) {
		this.setState({value});}
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
		   						<SplitButton
								      title={state.title}
								      id={`split-button-basic`}
								      //onSelect={function(evnt){target(evnt)}}
								      onSelect={function(evnt){taxAndStateUpdate(evnt, target)}}
								      //onSelect={function(evt){taxesCost(props.tax[i].tax)}}
							    >
		    				    	{createListItems(props, state)}
		    				     </SplitButton>
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

function taxAndStateUpdate(event, target){
	target(event);
	taxesCost(event);
}

function test(event, props, page) {
		event.preventDefault();

		//Evalates promoCode.
		var enteredPromo = page.promoForm.current.value;
		var promo = props.items[0].promoCode;
		//console.log(enteredPromo);
		//console.log(promo);

		var enablePromo = false;
		if (promo === enteredPromo) { //TODO: CHECK for date.
			enablePromo = true;
		}

		var shippingInfo = {
			promoEnabled: enablePromo,

			name: page.nameForm.current.value,
			country: page.countryForm.current.value,
			street: page.streetForm.current.value,
			city: page.cityForm.current.value,
			state: page.streetForm.current.value,
			zip: page.zipForm.current.value,
		}
		props.evalShipping(shippingInfo)

		var costInfo = {
			shippingCost: shippingCost(shippingInfo),
			taxesCost: taxesCost(props),
			productCost: totalProductCost(props, enablePromo),
			orderTotal: 0.00,
			savingsTotal: savingsTotal(props, enablePromo),
		}
		costInfo.orderTotal = costInfo.shippingCost + (costInfo.productCost * costInfo.taxesCost) + costInfo.productCost;
		props.setCosts(costInfo);

		props.changeFlux('b');
}

function shippingCost(shippingInfo) {

	return 0.00;
}

function taxesCost(props) {
	console.log(props);
	return 1;
}

function totalProductCost(props, promoEnabled) {
	const itemsInCart = props.items//.filter(greaterThan0);
	//console.log(props.cart)
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

function savingsTotal(props, promoEnabled) {
	const itemsInCart = props.items//.filter(greaterThan0);
	//console.log(props.cart)
	//console.log("PromoValid?", props.cart.promoEnabled)

	var savings = 0.00;
	itemsInCart.map((item, i) => {
		const quantity = item.quantity;

		//Sale ITem
		if (item.sale) {
			savings += (item.price - item.salePrice) * quantity;
		//Promo Item
		} else if (promoEnabled && item.promo) { //TODO: Check for valid promo date.
			savings += (item.price * item.promoPrice) * quantity;
		}

		return item;
	})
	return savings;
}

const greaterThan0 = (element, index, array) => {
	return element.quantity > 0;

}

function createListItems(props, state, target){
	console.log(props);
			return props.tax.map((product, i) => {
			 //console.log(this.props.product.prod);
			 //console.log(this.props.searchField);
			return(
					<MenuItem eventKey={props.tax[i].state}>{props.tax[i].state}</MenuItem>
				)
		});
		
	}



export default Checkout_Components;
