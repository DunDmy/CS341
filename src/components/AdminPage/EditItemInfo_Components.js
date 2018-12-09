/* Author: Austin Vanburen
 * Last Edited:
 * Description: Components for the Edit Item Info Pane within the admin console.
 * 
 */

//Essentials
import React from 'react';
import axios from 'axios';

//Bootstrap components
import {Grid, Col, Row, Image, Button, Panel, Thumbnail, Modal, FormGroup, FormControl, Form, ControlLabel, ButtonGroup} from 'react-bootstrap';
//import ScrollArea from 'react-scrollbar';



const ItemInfo_Components = ({props}) => {
	function removeItem(event) {
    	event.preventDefault()
		props.deleteItem(props.item.id)
		props.deleteItemSuccess(props.item.id);
		props.changeAdminFlux('e')
    }

	function onClick(event, page) {
	    event.preventDefault()
	    props.saveItem({
			id: props.item.id,
			prod: page.nameForm.current.value,
			price: page.priceForm.current.value,
			desc: document.getElementById("item-description").value,
			image: page.imagePathForm.current.value,
			promo: page.promoForm.current.checked,
			sale: page.saleForm.current.checked,
			salePrice: page.salePriceForm.current.value,
			numAvail: props.item.numAvail,
		}) 
    }

	return (
		<Modal.Dialog>
			<Modal.Header>
				<span>
		    		<Modal.Title>EDITING ITEM</Modal.Title>
		    	</span>
		    	<span align="right">
		    		<Button align="right" bsStyle="danger" bsSize="xsmall" onClick={() => props.changeAdminFlux('e')}>X</Button>
				</span>
			</Modal.Header>
			<Modal.Body style={{'maxHeight': 'calc(100vh - 210px)', 'overflowY': 'auto'}}>


				<Form horizontal>
					<Row>
						<Col md={3} lg={3}>
		     				<img className="w2 h2 w3-ns h3-ns br-100" src={props.item.image}/>
						</Col>
					</Row>
					<FormGroup controlId="">
						<Col md={3} lg={3}>
		      				Image Path:
		    			</Col>
		   				<Col md={6} lg={6} valign="middle">
		    				<FormControl 
			    				type="text" 
			    				defaultValue={props.item.image}
			    				inputRef={this.imagePathForm = React.createRef()}
		    				/>
		    			</Col>
					</FormGroup>

					<FormGroup controlId="">
						<Col md={3}>
		      				Item Name:
		    			</Col>
		   				<Col md={6}>
		    				<FormControl 
			    				type="text" 
			    				defaultValue={props.item.prod}
			    				inputRef={this.nameForm = React.createRef()}
		    				/>
		    			</Col>
					</FormGroup>

					<FormGroup controlId="">
		    			<Col md={3}>
		      				Item Price:
		    			</Col>
		   				<Col md={6}>
		    				<FormControl 
			    				type="text" 
			    				defaultValue={props.item.price}
			    				inputRef={this.priceForm = React.createRef()}
		    				/>
		    			</Col>
					</FormGroup>

					<FormGroup controlId="">
						<Col md={3}>
		      				Promotional:
		    			</Col>
		   				<Col md={3}>
		    				<FormControl 
		    					bsSize="small"
			    				type="checkbox" 
			    				defaultChecked={props.item.promo}
			    				inputRef={this.promoForm = React.createRef()}
		    				/>
		    			</Col>
					</FormGroup>
					<FormGroup controlId="">
						<Col md={3} lg={3}>
		      				Promotion Price:
		    			</Col>
		   				<Col md={6}>
		    				<FormControl 
			    				type="text"
			    				readOnly={true} 
			    				defaultValue={props.item.price - (props.item.price * props.item.promoPrice)}
			    				inputRef={this.promoPriceForm = React.createRef()}
		    				/>
		    			</Col>
					</FormGroup>

					<FormGroup controlId="">
						<Col md={3}>
		      				Sale:
		    			</Col>
		   				<Col md={3}>
		    				<FormControl 
			    				type="checkbox" 
			    				defaultChecked={props.item.sale}
			    				inputRef={this.saleForm = React.createRef()}
		    				/>
		    			</Col>
					</FormGroup>
					<FormGroup controlId="">
						<Col md={3}>
		      				Sale Price:
		    			</Col>
		   				<Col md={6}>
		    				<FormControl 
			    				type="text" 
			    				defaultValue={props.item.salePrice}
			    				inputRef={this.salePriceForm = React.createRef()}
		    				/>
		    			</Col>
					</FormGroup>

					<FormGroup controlId="">
						<Col md={3}>
		      				Item Description:
		    			</Col>
		   				<Col md={6}>
		    				<textarea id="item-description" name="item-description" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" 
					    		rows="9" aria-describedby="comment-desc" defaultValue={props.item.desc}></textarea>
		    			</Col>
					</FormGroup>
				</Form>
				<span>
					<Button justified="true" bsSize="small" onClick={(event) => removeItem(event)}>Delete Item</Button>
				</span>	
			</Modal.Body>
			<Button justified="true" bsSize="small" onClick={(event) => onClick(event, this)}>Save</Button>
		</Modal.Dialog>
	);
}

/*
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
		    				<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-50" contentEditable="true" type="text" name="item-promoprice"
		    				defaultValue={props.item.promoPrice} id="item-promoprice"></input>
			   			</Col>
			   			<Col md={2}>
		    				<label class="db fw6 lh-copy f6" for="item-saleprice">Sale Price:</label>
		    				<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-50" contentEditable="true" type="text" name="item-saleprice"
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
							<Button bsSize="small" onClick={(event) => removeItem(event)}>Delete Item</Button>
						</span>
		  			</Row>

		  			*/

export default ItemInfo_Components;