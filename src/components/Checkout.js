import React from 'react'

import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

import CheckoutForm from './CheckoutForm'

const stripe = loadStripe('pk_test_yhEsmxW2qp0SctVTROKlkUbv')

export default () => (
    <div>
        <Elements stripe={stripe}>
            <CheckoutForm />
        </Elements>
    </div>
)