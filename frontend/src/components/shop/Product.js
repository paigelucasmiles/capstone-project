import React from 'react'
import './Product.css'


export default function Product(props) {
    
    const { product } = props

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
