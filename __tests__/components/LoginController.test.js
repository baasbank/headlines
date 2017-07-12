import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount , render } from 'enzyme';
import sinon from 'sinon';
import LoginController from '../../src/app/components/LoginController';
import localStorageMock from '../../mocks/localStorageMock';

window.localStorage = localStorageMock;

describe('LoginController', () => {
  beforeEach(() => {
    window.localStorage.setItem('userDetails', JSON.stringify({
      givenName: 'Baasbank',
      imageUrl: 'me',
    }));
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<LoginController/>, div);
  });
});
