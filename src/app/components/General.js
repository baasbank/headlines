/* eslint linebreak-style: ["error", "windows"]*/
/* eslint-env es6*/

import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Sources from './Sources';

export default class General extends React.Component {
  render() {
    return (
      <div>
        <h1>{'General'}</h1>
        <Sources />
      </div>
    );
  }
  }
