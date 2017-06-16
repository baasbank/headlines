// import sourcesStore from '../../src/app/stores/SourcesStore';
// // import Dispatcher from '../../src/app/dispatcher/Dispatcher';
// import mockData from '../../mocks/sampleSources';
// // import * as Constant from '../../constants';

// const sources = { ...mockData };
// //  [
// //   {
// //     id: 'BBC',
// //     description: 'British news',
// //   },
// //   {
// //     id: 'Super sport',
// //     description: 'super sport new',
// //   },
// // ];

// describe('Test for sources store', () => {
//   it('should be empty initially', () => {
//     const source = sourcesStore.getSources;
//     expect(source).toHaveLength(0);
//   });
//   // it('should return sources when getAll() is called', () => {
//   //   expect(sourcesStore.getAll).toBe(sources);
//   // });
// });

// // test('Store should listen for a  "RECIEVE_SOURCES" event', () => {
// //   Dispatcher.dispatch({
// //     Type: RECIEVE_SOURCES,
// //     sources,
// //   });
// //   expect(SourceStore.sources).toBe(sources);
// // });



// // test('Function "getSources" that update the isauth property', () => {
// //   expect(SourceStore.setSources).toBeInstanceOf(Function);
// //   SourceStore.setSources(sources);
// //   expect(SourceStore.sources).toBe(sources);
// // });

// // test('Store should listen to "GET-NOTIFY" event', () => {
// //   Dispatcher.dispatch({
// //     Type: Constant.GET_SOURCE,
// //     sources,
// //   });
// //   expect(SourceStore.sources).toBe(sources);
// // });

// import jest from 'jest';
import sourcesStore from '../../src/app/stores/SourcesStore';
import dispatcher from '../../src/app/dispatcher/Dispatcher';

jest.mock('../../src/app/dispatcher/Dispatcher');
jest.dontMock('../../src/app/stores/SourcesStore');

describe('Sources Store', () => {
  let sources;
  let dispatcherMock;
  beforeEach(() => {
    dispatcherMock = dispatcher.register.mock.calls[0][0];
    sources = {
      0: {
        id: 'bbc-news'
      },
      1: {
        id: 'aljazeera'
      }
    };
  });

  afterEach(() => {
    sourcesStore.handleActions({ type: 'RECIEVE_SOURCES', sources: [] });
  });
  describe('Test for getSources method', () => {

    it('should return an empty object on first call', () => {
      expect(sourcesStore.getSources()).toEqual([]);
    });

    it('should be registered to a dispatcher', () => {
      dispatcherMock({ type: 'RECIEVE_SOURCES', sources });
      expect(sourcesStore.getSources()).toEqual(sources);
    });

    it('should return an updated sources after receiving an action', () => {
      sourcesStore.handleActions({ type: 'RECIEVE_SOURCES', sources });
      expect(sourcesStore.getSources()).toEqual(sources);
    });

    it('should not respond to an action not registered to it', () => {
      sourcesStore.handleActions({ type: 'GET_ALL_ARTICLES', sources });
      expect(sourcesStore.getSources()).toEqual([]);
    });
  });
});
