import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import App from './components/app'; ...this is replaced with react router in the ReactDOM.render
import {Router, browserHistory} from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      {/* browserHistory says 'use the entire URL when trying to find out where we are' */}
      <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
