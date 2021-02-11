import React from 'react'
import './Product.css'


export default function Product(props) {
    
    const { product, addItemsToCart } = props


    // finish this function from product page as you need the size information
    const handleClick = (event) => {
        // addItemsToCart()
        console.log(event, product)
    } 

    return (
        <div className="card">
            <a href={`/product/${product.id}`}>
                <img 
                className='medium' 
                src={product.image}
                alt='linen long set' 
                />
            </a>
            <div className="card-body">
                <a href={`/product/${product.id}`}>
                <h2 className='product-name'>{product.name}</h2>
                </a>
            </div>
            <div className="price">
                £{product.price}
                {/* <button onClick={handleClick}>
                    ADD TO CART
                </button> */}
            </div>
        </div>
    )
}
