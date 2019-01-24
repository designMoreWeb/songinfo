import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//user created files
import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);