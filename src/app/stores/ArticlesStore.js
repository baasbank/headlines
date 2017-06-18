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
     * Initializing the state of articles to an empty array,
     * and binding the getArticles function.
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
     * the handleActions function handles the message dispatched by actions,
     * and emits events and payload based on the type of action received.
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
