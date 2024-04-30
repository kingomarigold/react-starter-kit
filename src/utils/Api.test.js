import axios from 'axios'
import Api from './Api'

jest.mock('axios')

describe('[Api Test Suite]', () => {
    test('Create the Api Object', async () => {
        const myApi = new Api('/api', null, null, { 'Content-Type': 'application/json' })
        expect(axios.create).toHaveBeenCalledWith(expect.objectContaining({
            baseURL: '/api',
            headers: { 'Content-Type': 'application/json' }
        }))
    })

    describe('[Test Suite for get]', () => {
        test('Call the get function with all callbacks', async () => {
            const reqCallback = jest.fn()
    
            const  tokenFetcher = () => {
                return '123'
            }
    
            let myApi = new Api('/api', reqCallback, tokenFetcher, { 'Content-Type': 'application/json' })
            myApi.instance = {
                get: jest.fn(),
                request: jest.fn()
            }
            await myApi.get('/user', {'q': '1234'})
            expect(myApi.instance.get).toHaveBeenCalledWith('/user',
                expect.objectContaining({
                    params: {'q': '1234'},
                    headers: {'Authorization': 'Bearer 123'}
                })
            )
            expect(reqCallback).toHaveBeenCalledTimes(2)
            expect(reqCallback).toHaveBeenNthCalledWith(1, true)
            expect(reqCallback).toHaveBeenNthCalledWith(2, false)
        })

        test('Call the get function with only request callback', async () => {
            const reqCallback = jest.fn()
            
            let myApi = new Api('/api', reqCallback, null, { 'Content-Type': 'application/json' })
            myApi.instance = {
                get: jest.fn(),
                request: jest.fn()
            }
            await myApi.get('/user', {'q': '1234'})
            expect(myApi.instance.get).toHaveBeenCalledWith('/user',
                expect.objectContaining({
                    params: {'q': '1234'},
                    headers: {}
                })
            )
            expect(reqCallback).toHaveBeenCalledTimes(2)
            expect(reqCallback).toHaveBeenNthCalledWith(1, true)
            expect(reqCallback).toHaveBeenNthCalledWith(2, false)
        })

        test('Call the get function with only token callback', async () => {
            const  tokenFetcher = () => {
                return '123'
            }
    
            let myApi = new Api('/api', null, tokenFetcher, { 'Content-Type': 'application/json' })
            myApi.instance = {
                get: jest.fn(),
                request: jest.fn()
            }
            await myApi.get('/user', {'q': '1234'})
            expect(myApi.instance.get).toHaveBeenCalledWith('/user',
                expect.objectContaining({
                    params: {'q': '1234'},
                    headers: {'Authorization': 'Bearer 123'}
                })
            )
        })
    })

    describe('[Test Suite for post]', () => {
        test('Call the post function with all callbacks', async () => {
            const reqCallback = jest.fn()
    
            const  tokenFetcher = () => {
                return '123'
            }
    
            let myApi = new Api('/api', reqCallback, tokenFetcher, { 'Content-Type': 'application/json' })
            myApi.instance = {
                get: jest.fn(),
                request: jest.fn()
            }
            await myApi.post('/user', {'q': '1234'})
            expect(myApi.instance.request).toHaveBeenCalledWith(
                expect.objectContaining({
                    method: 'post',
                    url: '/user',
                    data: {'q': '1234'},
                    headers: {'Authorization': 'Bearer 123'}
                })
            )
            expect(reqCallback).toHaveBeenCalledTimes(2)
            expect(reqCallback).toHaveBeenNthCalledWith(1, true)
            expect(reqCallback).toHaveBeenNthCalledWith(2, false)
        })

        test('Call the post function with only req callback', async () => {
            const reqCallback = jest.fn()
    
            let myApi = new Api('/api', reqCallback, null, { 'Content-Type': 'application/json' })
            myApi.instance = {
                get: jest.fn(),
                request: jest.fn()
            }
            await myApi.post('/user', {'q': '1234'})
            expect(myApi.instance.request).toHaveBeenCalledWith(
                expect.objectContaining({
                    method: 'post',
                    url: '/user',
                    data: {'q': '1234'},
                    headers: {}
                })
            )
            expect(reqCallback).toHaveBeenCalledTimes(2)
            expect(reqCallback).toHaveBeenNthCalledWith(1, true)
            expect(reqCallback).toHaveBeenNthCalledWith(2, false)
        })

        test('Call the post function with only token fetcher', async () => {
            const  tokenFetcher = () => {
                return '123'
            }
    
            let myApi = new Api('/api', null, tokenFetcher, { 'Content-Type': 'application/json' })
            myApi.instance = {
                get: jest.fn(),
                request: jest.fn()
            }
            await myApi.post('/user', {'q': '1234'})
            expect(myApi.instance.request).toHaveBeenCalledWith(
                expect.objectContaining({
                    method: 'post',
                    url: '/user',
                    data: {'q': '1234'},
                    headers: {'Authorization': 'Bearer 123'}
                })
            )
        })
    })
})