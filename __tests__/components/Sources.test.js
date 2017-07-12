import React from 'react';
import sinon from 'sinon';
import { shallow, mount , render } from 'enzyme';
import Sources from '../../src/app/components/Sources';
import * as NewsAction from '../../src/app/actions/Actions';
import sourcesStore from '../../src/app/stores/SourcesStore';

describe('Sources', () => {

  const props = {
    search: '',
    error: '',
    sources: [
      {
      "id": "abc-news-au",
      "name": "ABC News (AU)",
      "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      "url": "http://www.abc.net.au/news",
      "category": "general",
      "language": "en",
      "country": "au",
      "urlsToLogos": {
      "small": "",
      "medium": "",
      "large": ""
      },
      "sortBysAvailable": [
      "top"
      ]
    }
    ]
  }

  const container = mount(<Sources {...props}/>);

  describe('sources state', ()=> {
    it('should initialize with an empty search string', () => {
      expect(container.state().search).toBe('');
    });

    it('should initialize with no errors', () => {
    expect(container.state().error).toBe('');
  });
});

  describe('on component mount', () => {
    it('should have a div that renders JSX on the DOM', () => {
      expect(container.find('.container')).toBeTruthy();
    });

    it('should have these methods', () => {
      expect(container.instance().recieveSources).toBeDefined();
      expect(container.instance().updateSearch).toBeDefined();
      expect(container.instance().recieveError).toBeDefined();
    });
});

  describe('#updateSearch', () => {
    it('should run when its state changes', () => {
      const updateSearch = jest.fn();
      updateSearch.call()
      const search = mount(<Sources updateSearch={updateSearch} {...props}/>);
      const input = search.find('input');
      input.simulate('change', { target: { value: ''} });
      expect(updateSearch).toHaveBeenCalled();
    });
  });

  describe("#componentDidMount", ()=> {
    it('should run', () => {
      const spy = sinon.spy(Sources.prototype, 'componentDidMount');
      const wrapper = mount(<Sources {...props}/>);
      expect(spy.called).toBeTruthy();
    });

    it('should call the fetchSources() function', () => {
      const fetchSourcesSpy = sinon.spy(NewsAction, 'fetchSources');
      mount(<Sources {...props}/>);
      expect(fetchSourcesSpy.called).toBeTruthy();
    });
  });
});

