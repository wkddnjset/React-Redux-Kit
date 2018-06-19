import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createHistory from "history/createBrowserHistory"
import Routes from './Routes';
import configureStore from './store/configureStore.js';
import './index.css'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()}>
    	<Routes/>
    </Router>
  </Provider>
  , document.getElementById('root'));