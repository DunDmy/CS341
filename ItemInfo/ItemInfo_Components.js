/* Author: Austin Vanburen
 * Last Edited:
 * Status: Incomplete. TODO:
 * 
 */

//Essentials
import React from 'react';

//Bootstrap components
import {Grid, Col, Row, Image, Button, Panel, Thumbnail} from 'react-bootstrap';

const ItemInfo_Components = ({props}) => {
	return (
		<Panel>
			<Panel.Body>
				<Grid>
		  			<Row className="show-grid">
		   				<Col xs={6} md={4}>
		      				<p>empty cell</p>
		    			</Col>
		    			<Col xs={6} md={4}>
		      				<h4>{props.item.prodName}</h4>
		    			</Col>
		    			<Col xs={6} md={4}>
		    				<Button bsStyle="danger" bsSize="xsmall" onClick={() => props.changeFlux('e')}>X</Button>
		    			</Col>
		  			</Row>
		  			<Row className="show-grid">
		  				<Col xs={6} md={4}>
		     				<Thumbnail href="#" alt="171x180" src={props.item.image} />
		    			</Col>
		    			<Col xs={6} md={4}>
		    				<p>empty cell</p>
		    			</Col>
		    			<Col xs={6} md={4}>
		      				<h5>{props.item.type}</h5>
		    			</Col>
		  			</Row>
		  			<Row className="show-grid">
		   				<Col xs={6} md={4}>
		      				<p>empty cell</p>
		    			</Col>
		    			<Col xs={6} md={4}>
		      				<p>{props.item.description}</p>
			   			</Col>
			   			<Col xs={6} md={4}>
		      				<p>empty cell</p>
		    			</Col>
		  			</Row>
		  			<Row className="show-grid">
			   			<Col xs={6} md={4}>
			      			<h5>{props.item.price}</h5>
			    		</Col>
			    		<Col xs={6} md={4}>
							<p>empty cell</p>
			    		</Col>
			    		<Col xs={6} md={4}>
			   				<Button bsSize="small" onClick={() => props.addToCart('l')}>Add to Cart</Button>
			   			</Col>
		  			</Row>
				</Grid>
			</Panel.Body>
		</Panel>
	);
}

export default ItemInfo_Components;