import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { shallow, mount , render } from 'enzyme';
import Articles from '../../src/app/components/Articles';
import * as NewsAction from '../../src/app/actions/Actions';
import articlesStore from '../../src/app/stores/ArticlesStore';

describe('Articles', () => {
  const props = {
      routeParams: {
        article: 'cnn',
        sortBy: 'top'
      }
    }
  const container = mount(<Articles {...props}/>);

  describe('on component mount', () => {
    it('renders without crashing', () => {
      mount(<Articles {...props}/>)
    });

    it('should have a receiveArticles method', () => {
    expect(container.instance().recieveArticles).toBeDefined();
    });

  });
  describe('#componentDidMount', () => {
    it('should run', () => {
      const articles = jest.fn();
      const componentDidMountSpy = jest.spyOn(Articles.prototype, 'componentDidMount');
      const articlesStoreSpy = jest.spyOn(articlesStore, 'on');
      const container = mount(<Articles {...props} onChange={articles}/>);
      expect(componentDidMountSpy).toHaveBeenCalled();
      expect(articlesStoreSpy).toHaveBeenCalled();
  });

    it('should call the fetchArticles() function with parameters', () => {
        const fetchArticlesSpy = sinon.spy(NewsAction, 'fetchArticles');
        mount(<Articles {...props}/>);
        expect(fetchArticlesSpy.calledWith(props.routeParams.article, props.routeParams.sortBy)).toBeTruthy();
      });
  }); 
});


