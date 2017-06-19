import React from 'react';

import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Sources from './components/Sources';
import General from './components/General';
import Headlines from './components/Headlines.jsx';
import Login from './components/Login.jsx';
import PageNotFound from './components/PageNotFound.jsx';

import '../../sass/main.scss';

/**
* The requireAuth function checks that a user cannot acces the
* certain parts of the app unless signed in.
* @param {String} nextState
* @param {String} replace
*/

const requireAuth = (nextState, replace) => {
  const token = localStorage.getItem('authenticated');
  if (!token) {
    replace('/');
  }
};

/**
* The app function  renders the whole app to the DOM.
* @returns routeS.
*/

const App = () => (
    <div>
        <Router history={hashHistory}>
          <Route component={General}>
            <Route path="/articles/:article/:sortBy" component={Headlines} onEnter={requireAuth}/>
            <Route path="/sources" component={Sources} onEnter={requireAuth}/>
            <Route path="/" component={Login}/>
          </Route>
          <Route path="*" component={PageNotFound}/>
        </Router>
  </div>
  );

render(<App />, document.getElementById('app'));
