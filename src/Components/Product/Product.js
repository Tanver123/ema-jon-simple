import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const { img, name, price, stock, seller } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product-main">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <div className="product-detail">
                <h3 id="heading-product">{name}</h3>
                <p>By: {seller}</p>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={props.handleAdToCart}> {element} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;