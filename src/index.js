import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import App from './components/Dashboard';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Header />
  </Provider>,
  document.getElementById('root'),
);
