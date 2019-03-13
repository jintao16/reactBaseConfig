import { request } from './serviceBase'

const urlHttps = 'http://' + window.location.host;
const URLS = {
    login: { url: urlHttps + '/business/basic/user/login', method: 'post' },
    getMenu: { url: urlHttps + '/business/basic/menu/get', method: 'get' },
}

export function configAxios(urlType, params) {
    const { url, method } = URLS[urlType]
    return request(url, method, params)
}