import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
// import axios from 'axios';

class SourcesStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
    this.message = '';
    this.getSources = this.getSources.bind(this);
  }

  getSources() {
    return this.sources;
  }

  handleActions(action) {
    if (action.type === 'RECIEVE_SOURCES') {
      this.sources = action.sources;
      this.emit('change');
    } else if (action.type === 'RECIEVE_SOURCES_ERROR') {
      this.message = action.message;
      this.emit('change');
    }
  }
}
const sourcesStore = new SourcesStore();
Dispatcher.register(sourcesStore.handleActions.bind(sourcesStore));

export default sourcesStore;
