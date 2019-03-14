import { configAxios } from "../../common/service";
import { message } from "antd";



export const getTodayRoadIllegal = params => {
    return async dispatch => {
        const res = await configAxios('index', params)
        if (res.errorCode !== 0) {
            message.error(res.message)
            return
        }
        
    }
}