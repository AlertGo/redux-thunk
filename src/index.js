import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore , applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
let state = createStore(reducer,applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={state}>
      <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
