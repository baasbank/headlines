import { EventEmitter } from 'events';

import Dispatcher from '../dispatcher/Dispatcher';


class ArticlesStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
    this.getArticles = this.getArticles.bind(this);
  }

  getArticles() {
    return this.articles;
  }

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
