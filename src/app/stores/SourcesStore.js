import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/Dispatcher';

class SourcesStore extends EventEmitter {
/**
   * Creates an instance of SourcesStore.
   * @constructor
   * @memberOf ArticlesStore
   */
  constructor() {
    super();

    /**
     * Initializing state and binding functions.
     */

    this.sources = [];
    this.errorMessage = {};
    this.getSources = this.getSources.bind(this);
    this.getError = this.getError.bind(this);
  }

  /**
 * getSources function
  * @return {array} news sources.
 */

  getSources() {
    return this.sources;
  }

  getError() {
    return this.errorMessage;
  }
/**
     * handle dispatched actions and emit events.
     * @param {object} action.Type - type of action
*/

  handleActions(action) {
    if (action.type === 'RECIEVE_SOURCES') {
      this.sources = action.sources;
      this.emit('change');
    } else if (action.type === 'RECIEVE_SOURCES_ERROR') {
      this.message = action.message;
      this.emit('error');
    }
  }
}


const sourcesStore = new SourcesStore();
Dispatcher.register(sourcesStore.handleActions.bind(sourcesStore));

export default sourcesStore;
