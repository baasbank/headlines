import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount , render } from 'enzyme';
import Login from '../../src/app/components/Login';
import localStorageMock from '../../mocks/localStorageMock';

window.localStorage = localStorageMock;

describe('Login', () => {
  beforeEach(() => {
    window.localStorage.setItem('userDetails', JSON.stringify({
      givenName: 'Baasbank',
      imageUrl: 'me',
    }));
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Login/>, div);
  });

  it('should render to static HTML', function() {
    expect(render(<Login />).text()).toEqual('Welcome To ArticoolsSee news from over 70 sources from around the worldClick to log in with your google accountLogin with Google');
  });

});
