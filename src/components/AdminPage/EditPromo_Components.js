/* Author: Austin Vanburen
 * Last Edited:
 * Status: Incomplete. TODO:
 * 
 */

//Essentials
import React from 'react';

//Bootstrap components
import {Grid, Col, Row, Image, Button, Panel, Thumbnail, Modal, FormGroup, FormControl, Form, ControlLabel} from 'react-bootstrap';
//import ScrollArea from 'react-scrollbar';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';


const EditPromo_Components = ({props}) => {
	function onClick (event, props, page) {
     	event.preventDefault();

		const percent = parseFloat(page.promoPercent.current.value) / 100;
		const code = page.promoCode.current.value
		const startDate = page.promoCalendar.current.state.value[0].toDate();
		const endDate = page.promoCalendar.current.state.value[1].toDate();
      	
		var promo = {
			promoPrice: percent,
			promoCode: code,
			promoStart: startDate,
			promoEnd: endDate,
		}

      	/*var listOfProds = props.items.slice();
      	listOfProds.map((item, i) => {
      		const p = parseFloat(item.price);
      		const price = (p - (p * percent));
      		item.promoPrice = price;
	      	item.promoCode = code;
	      	item.promoStart = startDate;
	      	item.promoEnd = endDate;
      		return item;
		});*/
		
      	props.activatePromotion(promo);
    }
	return (
		<Modal.Dialog bsSize="lg">
			<Modal.Header>
				<span>
		    		<Modal.Title>Set Promotional</Modal.Title>
		    	</span>
		    	<span>
		 			<Button bsStyle="danger" bsSize="xsmall" onClick={() => props.changeAdminFlux('e')}>X</Button>
		 		</span>
			</Modal.Header>
			<Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
				<div align="center">
					<Form horizontal>
					<FormGroup controlId="">
							<Col md={3}>
		      					% Off:
		    				</Col>
		   					<Col md={6}>
		    					<FormControl 
			    					type="text" 
			    					placeholder="Please enter a raw decimal value." 
			    					contentEditable="true"
			    					defaultValue=""
			    					inputRef={this.promoPercent = React.createRef()}
		    					/>
		    				</Col>
						</FormGroup>
						<FormGroup controlId="">
							<Col md={3}>
		      					Promotion Code:
		    				</Col>
		   					<Col md={6}>
		    					<FormControl 
			    					type="text" 
			    					placeholder="0000000" 
			    					contentEditable="true"
			    					defaultValue=""
			    					inputRef={this.promoCode = React.createRef()}
		    					/>
		    				</Col>
						</FormGroup>
					</Form>
					<RangeCalendar id="promoCalendar" ref={this.promoCalendar = React.createRef()}>
           			</RangeCalendar>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button bsSize="small" onClick={(event) => onClick(event, props, this)}>Activate Promotion</Button>
			</Modal.Footer>
		</Modal.Dialog>
	);
}

export default EditPromo_Components;