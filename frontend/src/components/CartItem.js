import React from 'react';
import './CartItem.css';

export default function CartItem(props) {

    const { name, image, price, size } = props

    return (
        <div className="cart-item">
            <div className="cart-item-image-container">
                <img
                    src={image}
                    alt='product thumbnail'
                    className="small"
                ></img>
            </div>
                <p className="product-name">{name}</p>
                <p className="product-name">size {size}</p>
                <div className="cart-price-container">
                    <p className='cart-price'>£ {price}</p>
            </div>
            <select>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <div className="cart-price-container">
                <p className='cart-price'>£ 200</p>
            </div>
        </div>
    )
}
