import { browserHistory } from 'react-router'
import loading from './loading'
import { configAxios } from '../../common/service'
import { message } from 'antd'
const loginSuccess = res => {
    return {
        type: 'SAVE_USERINFO',
        res: res
    }
}


export const goLogin = params => {
    return dispatch => {
        dispatch(loading(true))
        configAxios('login', params).then(res => {
            if (res.errorCode !== 0) {
                message.error(res.message || '错误!')
            }
            message.success('登录成功!')
            browserHistory.push('/main')
            dispatch(loginSuccess(res));
        })
    }
}