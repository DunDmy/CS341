/* 
 * Author: Austin Vanburen
 * Last Edited: 11/17/18
 * Description: Component which returns the edit sale modal. Allows Admin to set sale date.
 */

//Essentials
import React from 'react';

//Bootstrap components
import {Grid, Col, Row, Image, Button, Panel, Thumbnail, Modal, FormGroup, FormControl, Form, ControlLabel} from 'react-bootstrap';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';


const EditSale_Components = ({props}) => {
	return (
		<Modal.Dialog bsSize="lg">
			<Modal.Header>
				<span>
		    		<Modal.Title>Set Sale</Modal.Title>
		    	</span>
		 		<Button bsStyle="danger" bsSize="xsmall" onClick={() => props.changeAdminFlux('e')}>X</Button>
			</Modal.Header>
			<Modal.Body>
				<div align="center">
					<RangeCalendar id="promoCalendar" ref={this.saleCalendar = React.createRef()}>
           			</RangeCalendar>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button bsSize="small" onClick={() => props.activateSale({
					startDate: this.saleCalendar.current.state.value[0],
					endDate: this.saleCalendar.current.state.value[1]
			   	})}>Activate Sale</Button>
			</Modal.Footer>
		</Modal.Dialog>
	);
}

export default EditSale_Components;