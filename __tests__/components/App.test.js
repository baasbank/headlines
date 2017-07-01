import React from 'react';
import { render } from 'react-dom';
import App from '../../src/app/components/App';

import localStorageMock from '../../mocks/localStorageMock';

window.localStorage = localStorageMock;

describe('App', () => {
  beforeEach(() => {
    window.localStorage.setItem('userDetails', JSON.stringify({
      givenName: 'Baasbank',
      imageUrl: 'me',
    }));
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App/>, div);
  });
});
