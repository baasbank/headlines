/* eslint linebreak-style: ["error", "windows"]*/
/* eslint-env es6*/

import React from 'react';

import SourcesStore from '../stores/SourcesStore';

export default class Sources extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: SourcesStore,
    };
  }
  render() {
    return (
      <div>
        <h1>{'News Sources'}</h1>
      </div>
    );
  }
  }
