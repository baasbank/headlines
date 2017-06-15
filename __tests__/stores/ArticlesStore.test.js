import articlesStore from '../../src/app/stores/ArticlesStore';
import articles from '../../mocks/sampleArticles';
// import Dispatcher from '../../src/app/dispatcher/Dispatcher';
// import mockData from '../../mocks/sampleSources';
// import * as Constant from '../../constants';

// const mockArticles = articles.articles;
//  [
//   {
//     id: 'BBC',
//     description: 'British news',
//   },
//   {
//     id: 'Super sport',
//     description: 'super sport new',
//   },
// ];

describe('Test for articles store', () => {
  it('should be empty initially', () => {
    const article = articlesStore.getArticles;
    expect(article).toHaveLength(0);
  });
});
