import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const defaultState = {
  test: 0
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case "TEST":
      return {...state, test: 5}
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
