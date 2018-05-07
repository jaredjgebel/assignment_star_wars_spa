import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import encyclopediaApp from './helpers/reducers'

let store = createStore(encyclopediaApp, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
   <Provider store={store}>
      <AppContainer />
   </Provider>,
   document.getElementById('root'));
registerServiceWorker();
