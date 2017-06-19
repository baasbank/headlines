import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';
// import axios from 'axios';

class SourcesStore extends EventEmitter {
/**
   * Creates an instance of SourcesStore.
   * @constructor
   * @memberOf ArticlesStore
   */
  constructor() {
    super();

    /**
     * Initializing the state of sources to an empty array,
     * binding sources, message, and the getSources function.
     */

    this.sources = [];
    this.message = '';
    this.getSources = this.getSources.bind(this);
  }

  /**
 * getSources function
  * @return {array} news sources.
 */

  getSources() {
    return this.sources;
  }

/**
     * the handleActions function handles the message dispatched by actions,
     * and emits events and payload based on the type of action received.
     * @param {object}
*/

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
