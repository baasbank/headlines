import React from 'react';

import { getArticlesFromActions } from '../actions/Actions';
import articlesStore from '../stores/ArticlesStore';

/**
 * Class for the Headlines component on which
 * news articles are rendered.
 * @class Headlines
 * @extends React.Component
 */

export default class Headlines extends React.Component {
  /**
   * @constructor headlines
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
  }

/**
 * When the component mounts, the getArticlesFromActions
 * function is called, and the article and sortBy parameters
 * are passed to it.
 * The Articles Store listens for the 'change' event,
 * then calls the 'getArticles' method that sends the
 * articles to the component.
 */

  componentDidMount() {
    getArticlesFromActions(
      this.props.routeParams.article,
      this.props.routeParams.sortBy
    );

    articlesStore.on('change', () =>
      this.setState({
        articles: articlesStore.getArticles()
      })
    );
  }

 /**
 * When the component unmounts, remove the 'change' event
 * to prevent memory leaks.
 */

  componentWillUnmount() {
    articlesStore.removeListener('change', this.getArticles);
  }


  render() {
    const articles = this.state.articles.articles;
    const articlesList = articles === undefined ? [] : articles;
    return (
      <div>
        <div id="arthead">
        <p className="highlight"><strong>Articles</strong></p>
        </div>
          {articlesList.map(article => (
            <div className="col-md-3 same-height" key={article.url}>
              <div className="thumbnail">
                <img src={article.urlToImage}/>
                <div className="caption">
                  <a href={article.url}>{article.title}</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
