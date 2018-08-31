import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { store } from './store';

import './assets/style/global';

export const Root = () =>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>;

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();