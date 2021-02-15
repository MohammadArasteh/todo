import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import {RootReducer} from './redux/reducers/RootReducer'

import {createLogger} from 'redux-logger' 
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(RootReducer, applyMiddleware(createLogger()))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
