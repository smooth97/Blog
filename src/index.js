import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './static/scss/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './store/reducers';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, composeWithDevTools(middleware));


ReactDOM.render( 
    <Provider store={store}>
    <BrowserRouter >
        <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();