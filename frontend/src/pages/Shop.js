import React, { useEffect, useState } from 'react';
import Product from '../components/Product';

export default function Shop(props) {

    const { addItemsToCart } = props

    const [productData, setProductData] = useState([])

    useEffect(() => {
        getProductData();
    }, []);
    

    const getProductData = () => {
        fetch('http://localhost:4000/products')
            .then(response => response.json())
            .then(data => {
                setProductData(data.products)
            })
    }
    
    return (
        <div className="row center">
            {productData.map((product) => (
                    <Product key={product.id} product={product} addItemsToCart={addItemsToCart} ></Product>
            ))}
        </div>
    )
}
