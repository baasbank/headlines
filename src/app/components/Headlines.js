import React from 'react';

import { getArticlesFromActions }  from '../actions/Actions';
import articlesStore from '../stores/ArticlesStore';

export default class Headlines extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    getArticlesFromActions((this.props.routeParams.article),
    (this.props.routeParams.sortBy));
    articlesStore.on('change', () => (
      this.setState({
        articles: articlesStore.getArticles()
      })
    )
  )
}

  render() {
    const articles = this.state.articles.articles;
    const articlesList = (articles === undefined) ? [] : articles;
    return (
      <div>
        <p>Articles</p>
        <ul>
          {
            articlesList.map(article =>
              (
                <div key={article.url}>
                  <p><img src={article.urlToImage}/></p>
                  <a href={article.url}>{article.title}</a>
                </div>
              )
            )
          }
        </ul>
      </div>
    );
  }
}
