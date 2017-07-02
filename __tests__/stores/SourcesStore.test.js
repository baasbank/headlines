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
    it('should be an empty array initially', () => {
      expect(sourcesStore.getSources()).toEqual([]);
    });

    it('should be registered to the dispatcher', () => {
      dispatcherMock({ type: 'RECIEVE_SOURCES', sources, });
      expect(sourcesStore.getSources()).toEqual(sources);
    });

    it('should return sources when it receives an action', () => {
      sourcesStore.handleActions({ type: 'RECIEVE_SOURCES', sources, });
      expect(sourcesStore.getSources()).toEqual(sources);
    });

    it('should only respond to actions it is subscribed to', () => {
      sourcesStore.handleActions({ type: 'GET_ALL_ARTICLES', sources, });
      expect(sourcesStore.getSources()).toEqual({});
    });
  });
});
