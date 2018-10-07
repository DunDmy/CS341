/* Author: Austin Vanburen
 * Last Edited:
 * Status: Incomplete. TODO:
 * 
 */

//Essentials
import React from 'react';

//Bootstrap components
import {Grid, Col, Row, Image, Button, Panel, Thumbnail, Modal} from 'react-bootstrap';

const ItemInfo_Components = ({props}) => {
	return (
		<Modal.Dialog>
			<Modal.Header>
				<Modal.Title>{props.item.prodName}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Grid>
		  			<Row className="show-grid">
		  				<Col xs={6} md={3}>
		     				<Thumbnail href="#" alt="171x180" src={props.item.image} />
		    			</Col>
		    			<Col xs={6} md={3}>
		      				<Button bsStyle="danger" bsSize="xsmall" onClick={() => props.changeFlux('e')}>X</Button>
		    			</Col>
		  			</Row>
		  			<Row className="show-grid">
		   				<Col xs={6} md={3}>
		      				<h5>{props.item.type}</h5>
		    			</Col>
		    			<Col xs={6} md={3}>
		      				<p>{props.item.description}</p>
			   			</Col>
		  			</Row>
		  			<Row className="show-grid">
			   			<Col xs={6} md={3}>
			      			<h5>{props.item.price}</h5>
			    		</Col>
			    		<Col xs={6} md={3}>
			   				<Button bsSize="small" onClick={() => props.addToCart('l')}>Add to Cart</Button>
			   			</Col>
		  			</Row>
				</Grid>
			</Modal.Body>
		</Modal.Dialog>
	);
}

export default ItemInfo_Components;