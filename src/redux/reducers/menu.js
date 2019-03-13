let initialState = {
    mainMenuData: [],
    mainMenuDataSub: [],
}

const getter = (data, todo) => {
    switch (todo) {
        case 'mainMenuData':
            return data.filter((item) => (item.menuDisplay && (!item.children || item.children.length === 0) && item.menuName !== '平台管理'))
        case 'mainMenuDataSub':
            return data.filter((item) => (item.menuDisplay && (item.children && item.children.length > 1) && item.menuName !== '平台管理'));
        default:
            return data
    }
}

export default function login(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_MENU':
            return {
                mainMenuData: getter(action.data, 'mainMenuData'),
                mainMenuDataSub: getter(action.data, 'mainMenuDataSub')
            }
        default:
            return state
    }
}