import React from 'react';

import { getArticlesFromActions } from '../actions/Actions';
import articlesStore from '../stores/ArticlesStore';

export default class Headlines extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

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
  // handleSignOut() {
  //   localStorage.removeItem('authenticated');
  //   this.props.router.push('/login');
  // }

  render() {
    const articles = this.state.articles.articles;
    const articlesList = articles === undefined ? [] : articles;
    return (
      <div>
        <div id="arthead">
        <p className="highlight"><strong>Articles</strong></p>
        </div>
        {/*<button className="btn-default btn-lg signout" onClick={this.handleSignOut}>
          Sign Out</button>*/}
          {articlesList.map(article => (
            <div className="col-md-3 same-height" key={article.url}>
              <div className="thumbnail">
                <img
                  src={article.urlToImage}
                  alt="Lights"
                />
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
