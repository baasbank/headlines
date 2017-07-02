import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { shallow, mount , render } from 'enzyme';
import Articles from '../../src/app/components/Articles';
import { fetchArticles } from '../../src/app/actions/Actions';
import articlesStore from '../../src/app/stores/ArticlesStore';

describe('Articles', () => {
  const props = {
    articles: null,
      routeParams: {
        article: 'cnn',
        sortBy: 'top'
      }
    }

  it('renders without crashing', () => {
    mount(<Articles {...props}/>)
  });

  it('calls componentDidMount() lifecycle method', () => {
    const articles = jest.fn();
    const componentDidMountSpy = jest.spyOn(Articles.prototype, 'componentDidMount');
    const articlesStoreSpy = jest.spyOn(articlesStore, 'on');
    const container = mount(<Articles {...props} onChange={articles}/>);
    expect(componentDidMountSpy).toHaveBeenCalled();
   expect(articlesStoreSpy).toHaveBeenCalled();
  });
});