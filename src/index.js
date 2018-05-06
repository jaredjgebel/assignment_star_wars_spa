import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import encyclopediaApp from './helpers/reducers'

let store = createStore(encyclopediaApp, applyMiddleware(thunk))

ReactDOM.render(
   <Provider store={store}>
      <AppContainer />
   </Provider>,
   document.getElementById('root'));
registerServiceWorker();
