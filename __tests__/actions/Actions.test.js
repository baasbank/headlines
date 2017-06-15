import sinon from 'sinon';
import axios from 'axios';
import dispatcher from '../../src/app/dispatcher/Dispatcher';
import sourcesStore from '../../src/app/stores/SourcesStore';
import {
  getSourcesfromActions,
  getArticlesFromActions
} from '../../src/app/actions/Actions';
import mockData from '../../mocks/sampleSources';

describe('Actions', () => {
  let axiosMock;
  let dispatcherMock;
  let error;
  beforeEach(() => {
    axiosMock = sinon.stub(axios, 'get').callsFake(() => {
      // console.log('err', err);
      // if (err !== '') {
      //   return Promise.reject('errror occurred');
      // }
      return Promise.resolve({ ...mockData });
    });

    dispatcherMock = sinon.spy(dispatcher, 'dispatch');
  });

  afterEach(() => {
    axios.get.restore();
    dispatcher.dispatch.restore();
  });

  describe('Test for sources action', () => {
    describe('Test for axios', () => {
      error = true;
      let mockdata = { ...mockData };

      it('should call axios', () => {
        getSourcesfromActions();
        const sourceChange = (() => {
          expect(sourcesStore.sources).toBe(mockdata.data);
        });
        sourcesStore.on('change', sourceChange);
        expect(axiosMock.calledOnce).toBeTruthy();
      });
    });
  });

  describe('Test for dispatcher', () => {
    it('should call dispatcher.dispatch', () => {
      getSourcesfromActions().then((data) => {
        expect(dispatcherMock.called).toBeTruthy();
        expect(dispatcherMock.getCall(1).args[0].type).toBe('RECEIVE_SOURCES');
      });
    });
  });


  describe('Test for articles action', () => {
    describe('Test for axios', () => {
      it('should call axios', () => {
        getArticlesFromActions('bbc', 'top').then((data) => {
          expect(axiosMock.calledOnce).toBeTruthy();
        });
      });
    });
  });
});
