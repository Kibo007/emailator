import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './data/store';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
window.axios = axios;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
