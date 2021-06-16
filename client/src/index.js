import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const defaultState = {
  modalWindowOpen: true
}

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case "MODAL_WINDOW_CHANGE":
      return {...state, modalWindowOpen: !state.modalWindowOpen}
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
