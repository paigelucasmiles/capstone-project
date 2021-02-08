import React from 'react';
import './Cart.css';
import CartItem from '../components/CartItem';

export default function Cart(props) {

    const { itemsInCart } = props;

    return (
        <div className='cart-row' >
            <div className='cart-column'>
                <div className='cart-items-container' >
                    {itemsInCart.map((item) => {
                        return <CartItem key={item.id} name={item.name} price={item.price} image={item.image} size={item.size} />
                    })}
                </div>
            </div>
            <div className='cart-column' >
                <div className='cart-summary' >

                </div>
            </div>
        </div>
    )
}