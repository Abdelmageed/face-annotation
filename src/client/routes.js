import React from 'react';
import {Route, IndexRoute, browserHistory} from 'react-router';

import * as actionCreators from './actions/actionCreators';

import App from './components/App';
import Home from './containers/Home';
import SignupPage from './components/SignupPage';
import NotFoundPage from './components/NotFoundPage';


export const getRoutes = (store)=> {

  const redirectIfNotAuth = (nextState, replaceState)=> {
    const isAuthenticated = store.getState().user.isAuthenticated;
    console.log(isAuthenticated);
    if (!isAuthenticated) {
      replaceState({
        pathname: 'login'
      });
    }
  }
  
  return(
    <Route path="/" component={App}>
      <IndexRoute 
      component={Home} onEnter={redirectIfNotAuth}/>
      <Route path="/login" component={SignupPage} />
      <Route path="*" component={NotFoundPage} />  
    </Route>
  );
}

