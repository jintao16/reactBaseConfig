import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from "./redux/store/configureStore"
import Routes from './router/router'
import 'antd/dist/antd.css'
import './index.css';


ReactDOM.render((
    <Provider store={store}>
        <Routes />
    </Provider>
), document.getElementById('root'));


serviceWorker.unregister();
