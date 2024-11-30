// src/components/PayPalCheckout.jsx
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import PaymentFailure from "./PaymentFail";
import PaymentSuccess from "./PaymentSuccess";

function PayPalCheckout() {
    const paypal = useRef();
    const [transactionStatus, setTransactionStatus] = useState(null);

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "MacBook Laptop",
                                amount: {
                                    currency_code: "USD",
                                    value: 1.00,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    try {
                        const order = await actions.order.capture();
                        console.log("success", order);
                        setTransactionStatus("success");

                        await axios.post('http://localhost:7700/api/payment', {
                            id: order.id,
                            amount: order.purchase_units[0].amount.value,
                            currency: order.purchase_units[0].amount.currency_code
                        });
                    } catch (err) {
                        console.error(err);
                        setTransactionStatus("failure");
                    }
                },
                onError: (err) => {
                    console.error(err);
                    setTransactionStatus("failure");
                },
            })
            .render(paypal.current);
    }, []);

    if (transactionStatus === "success") {
        return <PaymentSuccess />;
    }

    if (transactionStatus === "failure") {
        return <PaymentFailure />;
    }

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}

export default PayPalCheckout;