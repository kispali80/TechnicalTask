import mockAxios from 'jest-mock-axios'
import { fetchProducts } from './apiClient'
import products from '../__mocks__/products.json'

jest.mock('axios')

describe('apiClient test', () => {
    afterEach(() => {
        mockAxios.reset()
    })

    it('tests the fetchProducts', async () => {
        mockAxios.get.mockResolvedValueOnce(products)
        const result = await fetchProducts()
        expect(result).toEqual(products)
    })
})
