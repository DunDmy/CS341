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
				<Modal.Title>{props.item.prod}</Modal.Title>
				<Button bsStyle="danger" bsSize="xsmall" onClick={() => props.changeFlux('e')}>X</Button>
			</Modal.Header>
			<Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
				<Grid>
		  			<Row className="show-grid">
		  				<Col xs={6} md={3}>
		     				<img className="w2 h2 w3-ns h3-ns br-100" src={props.item.image}/>
		    			</Col>
		  			</Row>
		  			<Row className="show-grid">
		    			<Col xs={6} md={3}>
		      				<p>{props.item.description}</p>
			   			</Col>
		  			</Row>
		  			<Row className="show-grid">
			   			<Col xs={6} md={3}>
			      			<h5>{props.item.price}</h5>
			    		</Col>
		  			</Row>
				</Grid>
			</Modal.Body>
			<Button bsSize="small" onClick={() => props.addToCart(props.item)}>Add to Cart</Button>
		</Modal.Dialog>
	);
}

export default ItemInfo_Components;