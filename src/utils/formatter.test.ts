import { formatPrice, formatCartItems } from './formatter'
import products from '../__mocks__/products.json'
import cartItems from '../__mocks__/cart-items.json'

describe('formatter test', () => {
    describe('formatCartItems test', () => {
        it('returns the result', () => {
            expect(formatCartItems(cartItems, products)).toEqual([
                {
                    amount: 22,
                    id: '628639c1bcb9946a0c',
                    img: 'https://media.gettyimages.com/photos/bolts-and-nuts-picture-id175425827?s=2048x2048',
                    name: 'Test Product 1',
                    price: 0.2,
                },
                {
                    amount: 10,
                    id: '1',
                    img: 'https://media.gettyimages.com/photos/bolts-and-nuts-picture-id175425827?s=2048x2048',
                    name: 'Test Product 2',
                    price: 20,
                },
                {
                    amount: 10,
                    id: 'TestProduct',
                    img: 'https://media.gettyimages.com/photos/bolts-and-nuts-picture-id175425827?s=2048x2048',
                    name: 'Test Product 3',
                    price: 20,
                },
                {
                    amount: 50,
                    id: 'TestProduct628639c1bcb9946a0c',
                    img: 'https://media.gettyimages.com/photos/bolts-and-nuts-picture-id175425827?s=2048x2048',
                    name: 'Test Product 4',
                    price: 0.3,
                },
            ])
        })
    })

    describe('formatPrice test', () => {
        it('formats the price without decimal points with 1 amount', () => {
            expect(formatPrice(90, 1)).toEqual('90€')
        })

        it('formats the price without decimal points with more than 1 amount', () => {
            expect(formatPrice(90, 10)).toEqual('900€')
        })

        it('formats the price with decimal points with 1 amount', () => {
            expect(formatPrice(3.994, 1)).toEqual('3.99€')
        })

        it('formats the price with decimal points with more than 1 amount', () => {
            expect(formatPrice(3.995, 19)).toEqual('75.91€')
        })
    })
})
