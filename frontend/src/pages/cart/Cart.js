import React from 'react';
import './Cart.css';
import CartItem from '../../components/cart/CartItem';
import { PayPalButton } from "react-paypal-button-v2";


export default function Cart(props) {

    const { itemsInCart, productData } = props;

    console.log(itemsInCart)

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
                            <p>£ total</p>
                        </div>
                        <PayPalButton amount="0.01"
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);

                            // OPTIONAL: Call your server to save the transaction
                            return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                orderID: data.orderID
                                })
                            });
                            }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}