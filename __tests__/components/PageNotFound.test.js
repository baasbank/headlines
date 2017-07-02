import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount , render } from 'enzyme';
import PageNotFound from '../../src/app/components/PageNotFound';
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<PageNotFound/>, div);
  });

  it('should render to static HTML', function() {
    expect(render(<PageNotFound />).text()).toEqual('404 Error... Testing me huh????');
  });
  