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



const ItemInfo_Components = ({props}) => {
	function onClick (event){
	    event.preventDefault();
	   //console.log(document.getElementById("item-promo").checked);

	    props.saveItem({
  					id: props.item.id,
					prod: document.getElementById("item-name").value,
					price: document.getElementById("item-price").value,
					desc: document.getElementById("item-description").value,
					image: document.getElementById("image-path").value,
					promo: document.getElementById("item-promo").checked,
					sale: document.getElementById("item-sale").checked,
					salePrice: document.getElementById("item-saleprice").value,
					//quantity: props.item.quantity,
					numAvail: document.getElementById("item-stock").value
		})
	     
    }
	return (
		<Modal.Dialog bsSize="lg">
			<Modal.Header>
				<span>
		    		<Modal.Title>EDITING ITEM</Modal.Title>
		    	</span>
		    	<Button bsStyle="danger" bsSize="xsmall" onClick={() => props.changeAdminFlux('e')}>X</Button>
			</Modal.Header>
			<Modal.Body style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
		  			<Row className="show-grid">
		  				<Col md={3}>
		     				<img className="w2 h2 w3-ns h3-ns br-100" src={props.item.image}/>
		    			</Col>
		    			<Col>
		    				<label class="db fw6 lh-copy f6" for="image-path">Image Path:</label>
        					<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-50" contentEditable="true" type="text" name="image-path" 
        					defaultValue={props.item.image} id="image-path">
        					</input>
		    			</Col>
		  			</Row>
		  			<Row className="show-grid">
		   				<Col md={2}>
		   					<label class="db fw6 lh-copy f6" for="item-name">Item Name:</label>
		   					<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-50" contentEditable="true" type="text" name="item-name"
		   					defaultValue={props.item.prod} id="item-name">
		   					</input>
		    			</Col>
		    			<Col md={2}>
		    				<label class="db fw6 lh-copy f6" for="item-price">Item Price:</label>
		    				<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-50" contentEditable="true" type="text" name="item-price"
		    				defaultValue={props.item.price} id="item-price"></input>
			   			</Col>
			   			<Col md={2}>
		    				<label class="db fw6 lh-copy f6" for="item-stock">Stock Avail:</label>
		    				<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-50" contentEditable="true" type="text" name="item-stock"
		    				defaultValue={props.item.numAvail} id="item-stock"></input>
			   			</Col>
			   			<Col xs={3} md={2}>
							<form class="pa4">
								<fieldset id="ITEMPROMO" class="bn">
							    	<div class="">
							    		<label for="item-promo" class="db fw6 lh-copy f6">Promotional Item: </label>
							      		<input class="mr2" type="checkbox" id="item-promo" defaultValue={props.item.promo}></input>
							    	</div>
							  	</fieldset>
							</form>
			   			</Col>
		  			</Row>
		  			<Row>
		  				<Col md={2}>
		    				<label class="db fw6 lh-copy f6" for="item-promoprice">Promo Price:</label>
		    				<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-50" contenteditable="true" type="text" name="item-promoprice"
		    				defaultValue={props.item.promoPrice} id="item-promoprice"></input>
			   			</Col>
			   			<Col md={2}>
		    				<label class="db fw6 lh-copy f6" for="item-saleprice">Sale Price:</label>
		    				<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-50" contenteditable="true" type="text" name="item-saleprice"
		    				defaultValue={props.item.salePrice} id="item-saleprice"></input>
			   			</Col>
						<Col md={2}>
							<form class="pa4">
								<fieldset id="ITEMSALE" class="bn">
							    	<div class="">
							    		<label for="item-sale" class="db fw6 lh-copy f6">Sale Item: </label>
							      		<input class="mr2" type="checkbox" id="item-sale" defaultValue={props.item.sale}></input>
							    	</div>
							  	</fieldset>
							</form>
			   			</Col>
		  			</Row>
		  			<Row>
		  				<form class="pa4 black-80">
					  		<div>
					    		<label for="item-description" class="f6 b db mb2">Item Description:</label>
					    		<textarea id="item-description" name="item-description" class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" 
					    		rows="9" aria-describedby="comment-desc">{props.item.desc}</textarea>
							</div>
						</form>
						<span>
							<Button bsSize="small" onClick={props.deleteItem}>Delete Item</Button>
						</span>
		  			</Row>
				
			</Modal.Body>
			<Modal.Footer>
				<Button bsSize="small" onClick={(event) => onClick(event)}>Save</Button>
			</Modal.Footer>
		</Modal.Dialog>
	);
}

/*const fetchItemInfo = ({item}) => {
	//item.id;
	item.prod: document.getElementById("item-name").value;
	item.price: document.getElementById("item-price").value;
	//item.type;
	item.desc: document.getElementById("item-description").value;
	item.image: document.getElementById("item-path").value;
	item.promo: document.getElementById("item-promo").value;
	//quantity: 1,
	item.numAvail: document.getElementById("item-stock").value;
	console.log(item);
	return (item);
}*/

export default ItemInfo_Components;