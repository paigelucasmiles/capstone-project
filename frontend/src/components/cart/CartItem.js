import React from 'react';
import './CartItem.css';

export default function CartItem(props) {

    const { productId, color, size, quantity, productData } = props

    const productInCart = productData.find((product) => product.id === productId)

    const subtotal = () => {
        const subtotalAmount = productInCart.price * quantity
        return subtotalAmount
    }

    return (
        <div className="cart-item">
            <div className="cart-item-image-container">
                <img
                    src={productInCart.image}
                    alt='product thumbnail'
                    className="small"
                ></img>
            </div>
            <div className="product-info-container">
                <p className="cart-product-name">{productInCart.name}</p>
                <p className="cart-product-detail">Colour: {color}</p>
                <p className="cart-product-detail">Size: {size}</p>
            </div>
                <div className="cart-price-container">
                    <p className='cart-price'>£ {productInCart.price}</p>
                </div>
                <div className="cart-price-container">
                    <p className='cart-price'>{quantity}</p>
                </div>
            <div className="cart-price-container">
                <p className='cart-price'>£ {subtotal()}</p>
            </div>
        </div>
    )
}
