import axios from 'axios'
import RestClient from './RestClient'

jest.mock('axios')

describe('[Rest Client Test Suite]', () => {
    test('get should call axios get with the required url and params', () => {
        const data = {'name': 'Yrliet'}
        axios.get.mockResolvedValue(data)


        let retVal =  RestClient.get({'url': '/api/roguetrader', 'params': 'aeldari'})
            .then( resp => expect(data).toEqual(resp))
        expect(axios.get).toHaveBeenCalledWith('/api/roguetrader', {'params': 'aeldari'})
        return retVal
    })
})