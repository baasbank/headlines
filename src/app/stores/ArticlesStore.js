import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/Dispatcher';


class ArticlesStore extends EventEmitter {
  /**
   * Creates an instance of ArticlesStore.
   * @constructor
   */
  constructor() {
    super();

    /**
     * Initializing the state of articles to an empty array.
     */

    this.articles = [];
    this.getArticles = this.getArticles.bind(this);
  }

/**
 * getArticles function
  * @return {array} news articles.
 */

  getArticles() {
    return this.articles;
  }

/**
     * handle dispatched actions and emit events.
     * @param {object}
*/

  handleActions(action) {
    if (action.type === 'RECEIVE_ARTICLES') {
      this.articles = action.articles;
      this.emit('change');
    }
  }
}
const articlesStore = new ArticlesStore();


Dispatcher.register(articlesStore.handleActions.bind(articlesStore));

export default articlesStore;
