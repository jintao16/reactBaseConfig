import React from 'react'
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import Login from '../views/login/login'
import Main from '../views/main/main'
import NotFound from '../views/404NotFound/404NotFound'
function App(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}
const Home = (nextState, callback) => {
    // require.ensure([], require => {
    //     cb(null, require("../views/home/home").default)
    // }, 'NotFound');
    import('../views/home/home').then(mod => callback(null, mod.default))
};
const Initial = (nextState, callback) => { import('../views/initial/initial').then(mod => callback(null, mod.default)) };
const Confirm = (nextState, callback) => { import('../views/confirm/confirm').then(mod => callback(null, mod.default)) };

const routes = () => (
    <Router history={browserHistory}>
        <Route path="/main" component={Main} >
            <IndexRoute getComponent={Home} />
            <Route path="/homepage" getComponent={Home} />
            <Route path="/initial" getComponent={Initial} />
            <Route path="/confirm" getComponent={Confirm} />
        </Route>
        <Route path="/login" component={App}>
            <IndexRoute component={Login} />
        </Route>

        <Route path="/NotFound" component={NotFound}></Route>
        <Redirect from="/" to="/login" />
        <Redirect from="*" to="/NotFound" />
    </Router>
);

export default routes;
