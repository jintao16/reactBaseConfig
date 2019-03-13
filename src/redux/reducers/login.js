let initialState = {
    userInfo: {}
}

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_USERINFO':
            return { userInfo: action.res.data }
        default:
            return state
    }
}