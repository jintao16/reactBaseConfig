import axios from 'axios'
import { message } from 'antd'

const serviceBase = axios.create({
    timeout: 15000,
    withCredentials: true
})

serviceBase.interceptors.response.use((response) => {
    if (response.status !== 200) {
        return {}
    }
    const { data } = response;

    return data;
},
    (error) => {
        message.error('网络错误!');
        return Promise.reject(error)
    }
)

function errorHandler(error) {
    if (process.env.NODE_ENV !== 'production') {
        console.info('%c [axios error]:', 'color: yellow', error);
    }
}

export function request(url, method = "get", queryParams) {
    if (!url) {
        message.warning('请求地址为空!')
        return
    }
    queryParams = queryParams || {}
    let axiosParams = {};

    axiosParams = {
        method,
        url,
        responseType: 'json',
    }
    if (axiosParams.method.toLowerCase() === 'post') {
        axiosParams.data = queryParams
    } else {
        axiosParams.params = queryParams
    }
    return serviceBase(axiosParams).catch(errorHandler)
}