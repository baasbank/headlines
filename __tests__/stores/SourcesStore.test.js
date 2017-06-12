import sourcesStore from '../../src/app/stores/SourcesStore';
import Dispatcher from '../../src/app/dispatcher/Dispatcher';
// import * as Constant from '../../constants';

const sources = [
  {
    id: 'BBC',
    description: 'British news',
  },
  {
    id: 'Super sport',
    description: 'super sport new',
  },
];

test('Sources Store should be empty initially', () => {
  const source = sourcesStore.getSources;
  expect(source).toHaveLength(0);
});

// test('Store should listen for a  "RECIEVE_SOURCES" event', () => {
//   Dispatcher.dispatch({
//     Type: RECIEVE_SOURCES,
//     sources,
//   });
//   expect(SourceStore.sources).toBe(sources);
// });



// test('Function "getSources" that update the isauth property', () => {
//   expect(SourceStore.setSources).toBeInstanceOf(Function);
//   SourceStore.setSources(sources);
//   expect(SourceStore.sources).toBe(sources);
// });

// test('Store should listen to "GET-NOTIFY" event', () => {
//   Dispatcher.dispatch({
//     Type: Constant.GET_SOURCE,
//     sources,
//   });
//   expect(SourceStore.sources).toBe(sources);
// });