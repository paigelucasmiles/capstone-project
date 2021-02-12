import React from 'react';
import './Cart.css';
import CartItem from '../components/cart/CartItem';

export default function Cart(props) {

    const { itemsInCart, productData } = props;

    return (
        <div className='cart-row' >
            <div className='cart-column'>
                <div className='cart-items-container' >
                    {itemsInCart.map((item) => {
                        return <CartItem key={item.id} productId={item.productId} color={item.productColor} size={item.productSize} quantity={item.productQuantity} productData={productData} />
                    })}
                </div>
            </div>
            <div className='cart-column' >
                <div className='cart-summary' >
                    <div id='cart-summary-text-conatiner'>
                        <h1>ORDER SUMMARY</h1>
                        <div id='cart-summary-price'>
                            <h2>ORDER TOTAL</h2>
                            <p>£ 675</p>
                        </div>
                        <button>checkout with paypal</button>
                    </div>
                </div>
            </div>
        </div>
    )
}