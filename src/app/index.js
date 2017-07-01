import React from 'react';

import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Sources from './components/Sources.jsx';
import App from './components/App.jsx';
import Articles from './components/Articles.jsx';
import Login from './components/Login.jsx';
import PageNotFound from './components/PageNotFound.jsx';

import '../../sass/main.scss';

/**
* check that a user cannot access certain parts of the app unless signed in.
* @param {String} nextState
* @param {String} replace - the next url
*/

const requireAuth = (nextState, replace) => {
  const token = localStorage.getItem('authenticated');
  if (!token) {
    replace('/');
  }
};

/**
* The app function  renders the whole app to the DOM.
* @returns routes.
*/

const Index = () => (
    <div>
        <Router history={hashHistory}>
          <Route component={App}>
            <Route path="/articles/:article/:sortBy" component={Articles} onEnter={requireAuth}/>
            <Route path="/sources" component={Sources} onEnter={requireAuth}/>
            <Route path="/" component={Login}/>
            <Route path="*" component={PageNotFound}/>
          </Route>
        </Router>
  </div>
  );

render(<Index />, document.getElementById('app'));
