import { configAxios } from "../../common/service";
import { message } from "antd";

const saveMenu = data => {
    return {
        type: 'SAVE_MENU',
        data
    }
}


export const getMenu = params => {
    return async dispatch => {
        const res = await configAxios('getMenu')
        if (res.errorCode !== 0) {
            message.error(res.message || '获取菜单接口错误!')
        }
        dispatch(saveMenu(res.data))
    }
}