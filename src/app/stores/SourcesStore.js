/* eslint linebreak-style: ["error", "windows"]*/
/* eslint-env es6*/

import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher';
// import axios from 'axios';

class SourcesStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
    // this.getSources = this.getSources.bind(this);
  }
}

export const getSources = () => this.sources;


const sourcesStore = new SourcesStore;

export default SourcesStore;

/* axios.get('https://newsapi.org/v1/sources?language=en')
      .then((response) => {
        console.log(response);
      }); */
