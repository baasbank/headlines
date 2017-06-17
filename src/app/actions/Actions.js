import axios from 'axios';

import Dispatcher from '../dispatcher/Dispatcher';

/**
  * This function gets news sources from news API and passes
  * the sources to the dispatcher which dispatches the related
  * action and the sources received.
  * @returns {array} an array of sources.
*/

export function getSourcesfromActions() {
  return axios
    .get('https://newsapi.org/v1/sources?language=en')
    .then((sources) => {
      Dispatcher.dispatch({
        type: 'RECIEVE_SOURCES',
        sources: sources.data
      });
    })
    .catch((message) => {
      Dispatcher.dispatch({
        type: 'RECIEVE_SOURCES_ERROR',
        message
      });
    });
}

/**
  * This function accepts two parameters; source Id and sortBy,
  * uses those to get news articles from news API, and passes the
  * articles to the dispatcher.
  * @param {string} sortBy, how to sort the articles received.
  * @param {string} sourceId, the ID of the news source.
  * @returns {object} the dispatcher.
*/

export function getArticlesFromActions(sourceId, sortBy) {
  return axios
    .get(
      `https://newsapi.org/v1/articles?source=${
        sourceId
        }&sortBy=${
        sortBy
        }&apiKey=213327409d384371851777e7c7f78dfe`
    )
    .then(articles =>
      Dispatcher.dispatch({
        type: 'RECEIVE_ARTICLES',
        articles: articles.data
      })
    )
    .catch((message) => {
      Dispatcher.dispatch({
        type: 'RECEIVE_ARTICLES_ERROR',
        message
      });
    });
}

