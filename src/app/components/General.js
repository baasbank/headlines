/* eslint linebreak-style: ["error", "windows"]*/
/* eslint-env es6*/

import React from 'react';

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
