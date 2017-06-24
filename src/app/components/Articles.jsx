import React from 'react';
import PropTypes from 'prop-types';


import { fetchArticles } from '../actions/Actions';
import articlesStore from '../stores/ArticlesStore';

/**
 * Headlines component on which news articles are rendered.
 * @class Headlines
 * @extends React.Component
 */

export default class Articles extends React.Component {
  /**
   * @constructor Articles
  */
  constructor() {
    super();

    /**
     * Initializing state of articles to
     * an empty array.
     */

    this.state = {
      articles: [],
    };
    this.recieveArticles = this.recieveArticles.bind(this);
  }

/**
 *calls the 'getArticles' method that sends the articles to the component.
 * @param {string} article - news source id
 * @param {string} sortBy - news sortBy method
 */

  componentDidMount() {
    fetchArticles(
      this.props.routeParams.article,
      this.props.routeParams.sortBy
    );

    articlesStore.on('change', this.recieveArticles);
  }

/**
 * preventing memory leaks
 */
  componentWillUnmount() {
    articlesStore.removeListener('change', this.recieveArticles);
  }

  recieveArticles() {
    this.setState({
      articles: articlesStore.getArticles()
    });
  }

  render() {
    const articles = this.state.articles.articles;
    const articlesList = articles === undefined ? [] : articles;
    const source = this.props.routeParams.article;
    const sortBy = this.props.routeParams.sortBy;
    return (
      <div>
        <div className="arthead">
          <p className="highlight">
            <strong>{sortBy} news from {source}</strong>
          </p>
        </div>
          {articlesList.map(article => (
            <div className="col-md-3 same-height" key={article.url}>
              <div className="thumbnail">
                <a href={article.url} target={'#'}>
                  <img src={article.urlToImage}/>
                  <div className="caption">
                    <p >{article.title}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

Articles.PropTypes = {
  routeParams: PropTypes.object,
  article: PropTypes.string,
  sortBy: PropTypes.string
};
