import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Sources from './components/Sources';
import General from './components/General';
import Headlines from './components/Headlines.jsx';
import Login from './components/Login.jsx';

const App = () => (
    <div>
        <Router history={hashHistory}>
          <Route path="/" component={General}>
            <Route path="/articles/:article/:sortBy" component={Headlines}/>
            <Route path="/sources" component={Sources}/>
            <Route path="/login" component={Login}/>
          </Route>
        </Router>
  </div>
  );

render(<App />, document.getElementById('app'));
