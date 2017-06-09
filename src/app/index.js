/* eslint linebreak-style: ["error", "windows"]*/
/* eslint-env es6*/

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import General from './components/General';

const App = () => (
  <div>
    <div>
        <Router history={browserHistory}>
          <Route path="/" component={Sources}/>
          <Route path="/articles" component={Headlines}/>
        </Router>
      </div>
    <div>
      <General />
    </div>
  </div>

);

render(<App />, document.getElementById('app'));

