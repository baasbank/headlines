import sourcesStore from '../../src/app/stores/SourcesStore';
import dispatcher from '../../src/app/dispatcher/Dispatcher';

jest.mock('../../src/app/dispatcher/Dispatcher');
jest.dontMock('../../src/app/stores/SourcesStore');

describe('Sources Store', () => {
  describe('Test for getSources method', () => {
    let sources;
    let dispatcherMock;
    beforeEach(() => {
      dispatcherMock = dispatcher.register.mock.calls[0][0];
      sources = {
        0: {
          id: 'business-insider'
        },
        1: {
          id: 'cnn'
        }
      };
    });

    afterEach(() => {
      sourcesStore.handleActions({ type: 'RECIEVE_SOURCES', sources: {} });
    });
    it('should return an empty object on first call', () => {
      expect(sourcesStore.getSources()).toEqual([]);
    });

    it('should be registered to a dispatcher', () => {
      dispatcherMock({ type: 'RECIEVE_SOURCES', sources, });
      expect(sourcesStore.getSources()).toEqual(sources);
    });

    it('should return an updated sources after receiving an action', () => {
      sourcesStore.handleActions({ type: 'RECIEVE_SOURCES', sources, });
      expect(sourcesStore.getSources()).toEqual(sources);
    });

    it('should not respond to an action not registered to it', () => {
      sourcesStore.handleActions({ type: 'GET_ALL_ARTICLES', sources, });
      expect(sourcesStore.getSources()).toEqual({});
    });
  });
});
