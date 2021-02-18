import React, { useRef, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';

export default function PayPal(props) {

    const { calculateCartTotal, redirectHome } = props


    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Fosse Sustainable Loungewear",
                            amount: {
                                currency_code: "USD",
                                value: calculateCartTotal,
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order)
                if (order.status === "COMPLETED") {
                    redirectHome();
                }
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    })

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
