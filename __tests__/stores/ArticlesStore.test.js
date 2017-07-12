import articlesStore from '../../src/app/stores/ArticlesStore';
import dispatcher from '../../src/app/dispatcher/Dispatcher';


jest.mock('../../src/app/dispatcher/Dispatcher');
jest.dontMock('../../src/app/stores/ArticlesStore');

describe('Articles Store', () => {
  let articles;
  let dispatcherMock;
  beforeEach(() => {
    dispatcherMock = dispatcher.register.mock.calls[0][0];
    articles = {
      0: {
        title: 'Google releases new TensorFlow Object Detection API',
      },
      1: {
        title: `Amazon wants to become Walmart 
        before Walmart can become Amazon`,
      },
    };
  });

  afterEach(() => {
    articlesStore.handleActions({ type: 'RECEIVE_ARTICLES', articles: {} });
  });

  it('should be an empty array initially', () => {
    expect(articlesStore.getArticles()).toEqual([]);
  });

  it('should be registered to the dispatcher', () => {
    dispatcherMock({ type: 'RECEIVE_ARTICLES', articles, });
    expect(articlesStore.getArticles()).toEqual(articles);
  });

  it('should return articles when it receives an action', () => {
    articlesStore.handleActions({ type: 'RECEIVE_ARTICLES', articles, });
    expect(articlesStore.getArticles()).toEqual(articles);
  });

  it('should only respond to actions it is subscribed to', () => {
    articlesStore.handleActions({ type: 'GET_ALL_SOURCES', articles, });
    expect(articlesStore.getArticles()).toEqual({});
  });
});

