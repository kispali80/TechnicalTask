import { getTotals, validateAddItem, validateUpdateItem } from './cart'
import products from '../__mocks__/products.json'
import cartItems from '../__mocks__/cart-items.json'

describe('cart test', () => {
    describe('validateAddItem test', () => {
        const product = products[0]

        it('is valid', () => {
            expect(validateAddItem(products, product.id, 20)).toEqual({
                isValid: true,
                error: '',
            })
        })

        it('is NOT valid because the given amount is 0', () => {
            expect(validateAddItem(products, product.id, 0)).toEqual({
                isValid: false,
                error: 'You have to to specify more than 0 amount',
            })
        })

        it('is NOT valid because the given amount is smaller than minimal order amount', () => {
            expect(validateAddItem(products, product.id, 10)).toEqual({
                isValid: false,
                error: 'The updated amount must be greater or equal than minimum order amount',
            })
        })

        it('is NOT valid because the given amount is greater than available amount', () => {
            expect(validateAddItem(products, product.id, 1001)).toEqual({
                isValid: false,
                error: 'You cannot add more than the available amount',
            })
        })
    })

    describe('validateUpdateItem test', () => {
        const product = products[0]

        it('is valid', () => {
            expect(
                validateUpdateItem(products, cartItems, product.id, 20)
            ).toEqual({
                isValid: true,
                error: '',
            })
        })

        it('is NOT valid because the given amount is 0', () => {
            expect(
                validateUpdateItem(products, cartItems, product.id, 0)
            ).toEqual({
                isValid: false,
                error: 'You have to to specify more than 0 amount',
            })
        })

        it('is NOT valid because the given amount is smaller than minimal order amount', () => {
            expect(
                validateUpdateItem(products, cartItems, product.id, 10)
            ).toEqual({
                isValid: false,
                error: 'The updated amount must be greater or equal than minimum order amount',
            })
        })

        it('is NOT valid because the given amount is greater than available amount', () => {
            expect(
                validateUpdateItem(products, cartItems, product.id, 1001)
            ).toEqual({
                isValid: false,
                error: 'You cannot add more than the available amount',
            })
        })
    })

    describe('getTotals test', () => {
        it('calculates the getTotals', () => {
            expect(getTotals(cartItems)).toEqual({
                amount: 92,
                price: 11605.6,
            })
        })
    })
})
