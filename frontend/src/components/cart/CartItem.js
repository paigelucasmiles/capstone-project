import React from 'react';
import './CartItem.css';

export default function CartItem(props) {

    const { productId, color, size, quantity, productData, updateItemsInCart } = props

    const productInCart = productData.find((product) => product.id === productId)

    const subtotal = () => {
        const subtotalAmount = productInCart.price * quantity
        return subtotalAmount
    }

    const decrement = () => {
        const newQuantity = quantity - 1
        updateItemsInCart(newQuantity, productId)
    }

    const increment = () => {
        const newQuantity = quantity + 1
        updateItemsInCart(newQuantity, productId)
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
                    <p className='cart-price'>
                        <button className='decrement' onClick={decrement} >-</button>{quantity}<button className='increment' onClick={increment} >+</button>
                    </p>
                </div>
            <div className="cart-price-container">
                <p className='cart-price'>£ {subtotal()}</p>
            </div>
        </div>
    )
}
