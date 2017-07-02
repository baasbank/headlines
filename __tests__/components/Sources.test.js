import React from 'react';
import sinon from 'sinon';
import { shallow, mount , render } from 'enzyme';
import Sources from '../../src/app/components/Sources';
import { fetchSources } from '../../src/app/actions/Actions';
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


  const container = shallow(<Sources {...props}/>);
  
  it('renders without crashing', () => {
    mount(<Sources/>);
  });

  it('Should have an initial state for search string', () => {
    expect(container.state().search).toBe('');
  });

  it('Should have a div that renders JSX on the DOM', () => {
    expect(container.find('.container')).toBeTruthy();
  });

  it('it initializes with an empty string for errors', () => {
    expect(container.state().error).toBe('');
  });

  it('should check for methods', () => {
    expect(container.instance().recieveSources).toBeDefined();
    expect(container.instance().updateSearch).toBeDefined();
    expect(container.instance().recieveError).toBeDefined();
  });
  
  it('input search', () => {
    const updateSearch = jest.fn();
    updateSearch.call()
    const search = mount(<Sources updateSearch={updateSearch} {...props}/>);
    const input = search.find('input');
    input.simulate('change', { target: { value: ''} });
    expect(updateSearch).toBeCalledWith();
  });

  it('calls componentDidMount() lifecycle method', () => {
    const componentDidMountSpy = jest.spyOn(Sources.prototype, 'componentDidMount');
    const sourcesStoreSpy = jest.spyOn(sourcesStore, 'on');
    const container = mount(<Sources {...props}/>);
    expect(componentDidMountSpy).toHaveBeenCalled();
    expect(sourcesStoreSpy).toHaveBeenCalled();
  });
});
