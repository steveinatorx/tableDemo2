import React from 'react';
import { render } from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducers';
import { TableDemoContainer } from './containers';
import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
// import filter from 'redux-localstorage-filter';
import { serialize, deserialize } from 'redux-localstorage-immutable';


const rootReducer = compose(
 // apply deserialize from redux-localstorage-immutable
  mergePersistedState(deserialize)  
)(reducer);

console.log('rootReducer',rootReducer);

const storage = compose(
  // apply serialize from redux-localstorage-immutable
  serialize
  //filter('data')
)(adapter(window.localStorage));

console.log(storage);

const enhancer = compose(
  persistState(storage, 'tableDemo')
);

const store = createStore(rootReducer /*, [initialState]*/, enhancer);

console.log('store', store);

render(
  <Provider store={store} >
    <TableDemoContainer />
  </Provider>,
  document.getElementById('app')
);
