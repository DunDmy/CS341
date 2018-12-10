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

const Review_Components = ({props}) => {
	return (
		<Modal.Dialog autoFocus={true} backdrop="static">
			<Modal.Header>
				<Modal.Title>Checkout</Modal.Title>
				<Button bsStyle="danger" bsSize="xsmall" onClick={() => props.changeFlux('e')}>X</Button>
			</Modal.Header>
			<Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
				<Grid>
					<Row>
						<p>Order Confirmed! Please check your mail for further details regarding your order and shipping.
						</p>
					</Row>
				</Grid>
			</Modal.Body>
			<Button bsSize="small" onClick={() => props.changeFlux('e')}>Close</Button>
		</Modal.Dialog>
	);
}

export default Review_Components;
