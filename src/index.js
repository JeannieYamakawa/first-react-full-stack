import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import App from './components/app'; ...this is replaced with react router in the ReactDOM.render
import {Router, browserHistory} from 'react-router';
import reducers from './reducers';
import routes from './routes';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
