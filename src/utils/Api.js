import axios from 'axios'

class Api  {
    
    constructor (baseUrl, reqLifecycleCallback, tokenFetcher, headers) {
        this.reqLifecycleCallback = reqLifecycleCallback
        this.tokenFetcher = tokenFetcher
        this.instance =  axios.create({
            baseURL: baseUrl,
            headers: headers,
            validateStatus: (status) => {
                return status >= 200
            }
        })
    }
    
    handleRequestSentCallback = () => {
        if (this.reqLifecycleCallback) {
            this.reqLifecycleCallback(true)
        }
    }

    handleResponseReceivedCallback = () => {
        if (this.reqLifecycleCallback) {
            this.reqLifecycleCallback(false)
        }
    }
    
    handleTokenFetch = () => {
        let headers = {}
        if (this.tokenFetcher) {
            let token = this.tokenFetcher()
            headers = {'Authorization' : 'Bearer ' + token}
        }
        return headers
    }

    get = async (reqUrl, params) => {
        this.handleRequestSentCallback()
        const headers = this.handleTokenFetch()
        let retVal = await this.instance.get(reqUrl, {
            params: params,
            headers: headers
        })
        this.handleResponseReceivedCallback()
        return retVal
    }

    handleDataBasedCalls = async (method, reqUrl, data) => {
        this.handleRequestSentCallback()
        const headers = this.handleTokenFetch()
        let retVal = await this.instance.request({
            method: method,
            url: reqUrl,
            data: data,
            headers: headers
        })
        this.handleResponseReceivedCallback()
        return retVal
    }

    post = async (reqUrl, data) => {
        return await this.handleDataBasedCalls('post', reqUrl, data)
    }

    put = async (reqUrl, data) => {
        return await this.handleDataBasedCalls('put', reqUrl, data)
    }

    patch = async (reqUrl, data) => {
        return await this.handleDataBasedCalls('patch', reqUrl, data)
    }

    del = async (reqUrl, data) => {
        return await this.handleDataBasedCalls('delete', reqUrl, data)
    }
}


export default Api