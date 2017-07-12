import axios from 'axios';

import Dispatcher from '../dispatcher/Dispatcher';

/**
  * get news sources from news API and passes
  * @returns {array} sources - an array of objects.
*/

export const fetchSources = () => {
  return axios
    .get('https://newsapi.org/v1/sources?language=en')
    .then((sources) => {
      Dispatcher.dispatch({
        type: 'RECIEVE_SOURCES',
        sources: sources.data
      });
    })
    .catch((errorMessage) => {
      Dispatcher.dispatch({
        type: 'RECIEVE_SOURCES_ERROR',
        errorMessage
      });
    });
}

/**
  * get news articles from news API.
  * @param {string} sortBy, how to sort the articles received.
  * @param {string} sourceId, the ID of the news source.
  * @returns {object} the dispatcher.
*/

export function fetchArticles(sourceId, sortBy) {
  return axios
    .get(
      `https://newsapi.org/v1/articles?source=${
        sourceId
        }&sortBy=${
        sortBy
        }&apiKey=${process.env.API_KEY}`
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

