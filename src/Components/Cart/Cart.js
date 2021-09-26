import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let tex = 0;
    let totalPrice = 0;
    for (const product of cart) {
        total = total + product.price;
        tex = tex + total % 10;
        totalPrice = total + tex;
    }

    return (
        <div>
            <h1>Order Summury</h1>
            <h5>Order Item : {props.cart.length} </h5>

            <p>Totat Price: $ {total.toFixed(2)}</p>
            <p>tax: {tex.toFixed(2)}</p>
            <p>Total Price = {totalPrice.toFixed(2)}</p>

        </div>
    );
};

export default Cart;