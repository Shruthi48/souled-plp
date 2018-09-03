import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
