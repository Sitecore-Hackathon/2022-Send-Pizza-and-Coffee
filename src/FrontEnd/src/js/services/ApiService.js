import fetch from '../interceptor'

const apiService = {}

// @ts-ignore
apiService.postRequest = ({url, data, method = 'POST', formData = false}) => {
    console.log("data", data);
     // @ts-ignore
    return fetch({
        url,
        method,
        data: data,
        formData
    })
}

// @ts-ignore
apiService.get = (url) => {
    // @ts-ignore
    return fetch({
        url,
        method: "GET",
        data: null,
        formData: false
    });
}

// @ts-ignore
apiService.downloadRequest = ({url}) => {
    // @ts-ignore
    return fetch({
        url,
        method: 'get',
        responseType: 'blob'
    })
}

export default apiService
