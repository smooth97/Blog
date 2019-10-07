import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import './static/scss/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render( 
    <Provider store={store}>
    <BrowserRouter >
        <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();