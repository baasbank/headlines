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
  constructor(props) {
    super(props);

    /**
     * @description Initializing state of articles to an empty array.
     * @returns {void}
     */

    this.state = {
      articles: [],
    };
    this.recieveArticles = this.recieveArticles.bind(this);
  }

 /**
   * @description call the fetchArticles function when component mounts
   * @method
   * @memberOf Articles
   * @returns {void}
   */

  componentDidMount() {
    fetchArticles(
      this.props.routeParams.article,
      this.props.routeParams.sortBy
    );

    articlesStore.on('change', this.recieveArticles);
  }

/**
   * @description preventing memory leaks when this component unmounts
   * @method
   * @memberOf Articles
   * @returns {void}
 */

  componentWillUnmount() {
    articlesStore.removeListener('change', this.recieveArticles);
  }

/**
   * @description sets the state for articles
   * @method
   * @memberOf Articles
   * @returns {void}
   */

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
