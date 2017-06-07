/* eslint linebreak-style: ["error", "windows"]*/
/* eslint-env es6*/

import React from 'react';
import { render } from 'react-dom';

import General from './components/General';

const App = () => (
  <div>
    <General />
  </div>

);

render(<App />, document.getElementById('app'));

