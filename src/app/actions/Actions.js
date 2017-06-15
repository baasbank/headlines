import axios from 'axios';

import Dispatcher from '../dispatcher/Dispatcher';

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

