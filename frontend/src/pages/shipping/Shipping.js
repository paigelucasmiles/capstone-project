import React from 'react';
import './Shipping.css';

export default function Shipping() {
    return(
        <main id='shipping'>
            <div className='shipping-page-title-container'>
                <h1 className='shiping-page-title'>Shipping, Made-to-Order & Returns</h1>
            </div>
            <div id='shipping-page-wrapper'>
                <div className='shipping-container'>
                    <div className='shipping-row'>
                        <h2 className='shipping-title'>Shipping & Made-to-Order</h2>
                        <div className='shipping-column'>
                            <div className='shipping-blue-column'>        
                                <p className='shipping-text'>Each Fosse piece is designed and handmade in our studio in Somerset, UK.
                                    For now, Fosse will be operating on a made-to-order basis which means that all orders placed through
                                    our website or Instagram will take 2-4 weeks to be made and then sent. This is a very new process so please be patient, we will do everything we can to get your beautiful pieces to you as soon as possible. 
                                </p>
                                <p className='shipping-text'>
                                    We send every Fosse package with tracked Special Deliver to make sure it arrives safely to each customer. The cost of shippng with be calculated at checkout.
                                </p>
                                <p className='shipping-text'>
                                    If you are ordering outside the UK we have fixed cost for shipping depending on the country you are ordering from.
                                </p>
                                <p className='shipping-text'>
                                    We encourage any feedback you may have on this process: Madeline.robertson33@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='shipping-row'>
                        <h2 className='shipping-title'>Return & Exchange Policy</h2>
                        <div className='shipping-column'>
                            <div className='shipping-blue-column'>
                                <p className='shipping-text'>
                                    We do not yet have a set return or sxchange policy in place. We encourage anyone who it unhappy with their Fosse products to please contact use via email of Instagram and we will do our best to accomodate any problems of changes where possible.
                                    You can contact us via Instagram or email: madeline.robertson33@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}