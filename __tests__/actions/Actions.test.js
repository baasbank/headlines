import sinon from 'sinon';
import axios from 'axios';
import Dispatcher from '../../src/app/dispatcher/Dispatcher';
import sourcesStore from '../../src/app/stores/SourcesStore';
import {
  fetchSources,
  fetchArticles
} from '../../src/app/actions/Actions';
import mockData from '../../mocks/sampleSources';

describe('Actions', () => {
  let axiosMock;
  let dispatcherMock;
  beforeEach(() => {
    axiosMock = sinon.stub(axios, 'get').callsFake(() =>
      Promise.resolve(mockData.data));
    dispatcherMock = sinon.spy(Dispatcher, 'dispatch');
  });

  afterEach(() => {
    axios.get.restore();
    Dispatcher.dispatch.restore();
  });
  describe('Test for sources action', () => {
    describe('Test for axios', () => {
      const mockdata = mockData.data;
      it('should call axios', () => {
        fetchSources();
        const sourceChange = (() => {
          expect(sourcesStore.sources).toBe(mockdata.data);
        });
        sourcesStore.on('change', sourceChange);
        expect(axiosMock.calledOnce).toBeTruthy();
      });
    });
  });

  describe('Test for dispatcher', () => {
    it('should call Dispatcher.dispatch', () => {
      fetchSources().then((data) => {
        expect(dispatcherMock.called).toBeTruthy();
        expect(dispatcherMock.getCall(1).args[0].type).toBe('RECEIVE_SOURCES');
      });
    });
  });


  describe('Test for articles action', () => {
    describe('Test for axios', () => {
      it('should call axios with parameters', () => {
        fetchArticles('cnn', 'latest').then((data) => {
          expect(axiosMock.calledOnce).toBeTruthy();
        });
      });
    });
  });
});
