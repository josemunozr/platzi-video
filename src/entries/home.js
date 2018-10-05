import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { Map as map} from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// const logger = ({ getState, dispatch }) => next => action => {
//   console.log('viejo estado', getState().toJS());
//   console.log('acción', action );
//   const value = next(action);
//   console.log('nuevo estado', getState().toJS());
//   return value;
// }

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      // logger,
      thunk
    )
  )
);


const homeContainer = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>  
, homeContainer)
