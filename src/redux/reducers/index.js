import { combineReducers } from 'redux'
import login from "./login"
import menu from './menu'
import loading from "../actions/loading"


const rootReducer = combineReducers({
    login,
    menu,
    loading,
})

export default rootReducer;
