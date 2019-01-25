import React from 'react';
import {render} from 'react-dom'
import { store } from './store/configureStore'
import { Provider } from 'react-redux'

import App from './containers/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);