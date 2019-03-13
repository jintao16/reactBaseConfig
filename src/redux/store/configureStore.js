import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import rootReducer from "../reducers/index"
// import loggerService from '../../common/services/logger'
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
export default store;
