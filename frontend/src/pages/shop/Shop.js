// import React, { useEffect, useState } from 'react';
import Product from '../../components/shop/Product';

export default function Shop(props) {

    const { addItemsToCart, productData } = props
    
    return (
        <div className="row center">
            {productData.map((product) => (
                    <Product key={product.id} product={product} addItemsToCart={addItemsToCart} ></Product>
            ))}
        </div>
    )
}
