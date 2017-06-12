import React from 'react';
import { render } from 'react-dom';
import General from '../../src/app/components/General';

import localStorageMock from '../../mocks/localStorageMock';

window.localStorage = localStorageMock;

describe('General', () => {
  beforeEach(() => {
    window.localStorage.setItem('userDetails', JSON.stringify({
      givenName: 'Bamidele',
      imageUrl: 'me',
    }));
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<General/>, div);
  });
});
