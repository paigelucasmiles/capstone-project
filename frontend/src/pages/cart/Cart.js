import React, { useState } from 'react';
import './Cart.css';
import CartItem from '../../components/cart/CartItem';
import PayPal from '../../components/cart/PayPal'


export default function Cart(props) {

    const { itemsInCart, productData, updateItemsInCart } = props;

    const [ checkout, setCheckout ] = useState(false);

    const getProductPrice = (productId) => {
        const thisProduct = productData.find((product) => product.id === productId)
        return thisProduct.price
    }

    const calculateCartTotal = () => {
        let total = 0
        for (let i = 0; i < itemsInCart.length; i++) {
            const productPrice = getProductPrice(itemsInCart[i].productId)
            const subtotal = productPrice * itemsInCart[i].productQuantity
            total = total + subtotal
        }
        return total.toFixed(2)
    }

    const redirectHome = () => {
        props.history.push('/thankyou')
    }

    return (
        <div className='cart-row' >
            <div className='cart-column'>
                <div className='cart-items-container' >
                    {itemsInCart.map((item) => {
                        return <CartItem key={item.id} productId={item.productId} color={item.productColor} size={item.productSize} quantity={item.productQuantity} productData={productData} updateItemsInCart={updateItemsInCart} />
                    })}
                </div>
            </div>
            <div className='cart-column' >
                <div className='cart-summary' >
                    <div id='cart-summary-text-conatiner'>
                        <h1>ORDER SUMMARY</h1>
                        <div id='cart-summary-price'>
                            <h2>ORDER TOTAL</h2>
                            <p>£ {calculateCartTotal()}</p>
                        </div>
                        {checkout ? (
                            <PayPal calculateCartTotal={calculateCartTotal()} redirectHome={redirectHome} />
                            ) : (
                            <button onClick={() => {
                                setCheckout(true);
                            }} >
                                checkout
                            </button>) }
                    </div>
                </div>
            </div>
        </div>
    )
}