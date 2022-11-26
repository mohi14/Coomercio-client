import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpiner from '../Shared/LoadingSpiner/LoadingSpiner';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation()
    const { productName, price } = booking;

    if (navigation.state === 'loading') {
        return <LoadingSpiner></LoadingSpiner>
    }
    return (
        <div className='max-w-[1400px] m-auto mt-10 lg:mt-32 lg:w-2/6 w-4/5 border-2 border-secondary p-10 rounded-xl'>
            <h3 className='text-3xl font-bold'>Payment</h3>
            <p className='text-xl my-4'>Please pay <strong>${price}</strong> for <strong>{productName}</strong></p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;