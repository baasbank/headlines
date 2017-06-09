/* eslint linebreak-style: ["error", "windows"]*/
/* eslint-env es6*/

import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
// import axios from 'axios';

class SourcesStore extends EventEmitter {
  constructor() {
    super();

    this.sources = [];
    this.getSources = this.getSources.bind(this);
   
}

  getSources() { 
    return this.sources;
  }

  handleActions(action) {
    if (action.type === 'RECIEVE_SOURCES') {
      this.sources = action.sources;
      this.emit('change');
    }
  };
}
 
const sourcesStore = new SourcesStore();


Dispatcher.register(sourcesStore.handleActions.bind(sourcesStore));

export default sourcesStore;
