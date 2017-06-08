/* eslint linebreak-style: ["error", "windows"]*/
/* eslint-env es6*/

import React from 'react';

import * as sourcesStore from '../stores/SourcesStore';

export default class Sources extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: sourcesStore.getSources,
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
