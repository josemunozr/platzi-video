import React, { Fragment, Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Map as map} from 'immutable';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../../reducers/index';
import Header from '../components/header';
import Home from '../components/home';
import Videos from '../containers/videos';
import NotFoud from '../components/not-found';
 


const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
);

class App extends Component {
  render() { 
    return (
      <Provider store={store}>
        <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/videos" component={Videos} />
          <Redirect from="/v" to="/videos" />
          <Route component={NotFoud} />
        </Switch>
        </Fragment>
      </Provider>  
    );
  }
}
 
export default App;
