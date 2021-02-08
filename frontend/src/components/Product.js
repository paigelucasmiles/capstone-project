import React from 'react'
import './Product.css'
// import p1 from '../images/p1.jpg'
// import p2 from '../images/p2.jpg'
// import p3 from '../images/p3.jpg'
// import p4 from '../images/p4.jpg'
// import p5 from '../images/p5.jpg'
// import p6 from '../images/p6.jpg'
// import p7 from '../images/p7.jpg'
// import p8 from '../images/p8.jpg'

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
                ${product.price}
            </div>
        </div>
    )
}
