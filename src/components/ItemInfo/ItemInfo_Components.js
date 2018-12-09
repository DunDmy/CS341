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
	function onClick(event, props) {
		event.preventDefault();
		props.addToCart(props.item);
	}

	function renderPrice(product) {
		if(product.sale) {
			return (
				<div>
					<strike><span className="f6 db black-70">${product.price}</span></strike>
					<span className="f6 db black-70">${product.salePrice}</span>
					<span className="f6 db black-70">...on sale</span>
				</div>
			);
		} else if(product.promo) { //TODO: MAKE IT SO IT CHECKS FOR WITHIN THE DATE.
			return (
				<div>
					<strike><span className="f6 db black-70">${product.price}</span></strike>
					<span className="f6 db black-70">${product.price - (product.price * product.promoPrice)}</span>
					<span className="f6 db black-70">...with promo-code: {product.promoCode}</span>
				</div>
			);
		} else {
			return (
				<div>
					<span className="f6 db black-70">${product.price}</span>
				</div>
			);
		}
	}

	return (
		<Modal.Dialog bsSize="small">
			<Modal.Header>
				<Button bsStyle="danger" bsSize="xsmall" onClick={() => props.changeFlux('e')}>X</Button>
			</Modal.Header>
			<Modal.Body>
				<div align="center">
					<span><img className="w2 h2 w3-ns h3-ns br-100" src={props.item.image}/>
					<h1>{props.item.prod}</h1></span>
					<div>{props.item.desc}</div>
					{renderPrice(props.item)}
				</div>
			</Modal.Body>
			<Button justified="true" bsSize="small" onClick={(event) => onClick(event, props)}>Add to Cart</Button>
		</Modal.Dialog>
	);
}

export default ItemInfo_Components;