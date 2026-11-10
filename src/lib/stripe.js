import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// todo
export const PLAN_PRICE_ID = {
    'basic' : 'price_1UZxAoF9JTcMpoaltmnP6muf',
    'standard' : 'price_1UaEhCF9JTcMpoal21P1AjVo',
    'premium' : 'price_1UaEiWF9JTcMpoalqPfFOLHA'
}
