import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const handleAdToCart = product => {
        const newCount = [...cart, product];
        setCart(newCount)

    }
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className="shop-container">
            <div className="product-container">
                <h1>Product: {products.length} </h1>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAdToCart={() => handleAdToCart(product)}
                    >
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;