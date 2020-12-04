import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import SignIn from './components/auth/SignIn';
import Welcome from './components/welcome';
import EmployeeList from './components/auth/EmployeeList';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={`/`} component={App}>
                <IndexRoute component={Welcome}/>
                <Route path={`/signin`} component={SignIn}/>
                <Route path={`/EmployeeList`} component={EmployeeList}/>
            </Route>
        </Router>
    </Provider>
    , document.querySelector(`.container`));