// tslint:disable no-import-side-effect
// tslint:disable no-submodule-imports
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'tslib';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
