import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import StarterKit from './starterKitContainer';
import starterKitReducer from '../reducers/startKitReducer';
import { changeButtonMsg, changeInputText } from '../actions/startKitActions';

/* eslint-disable no-underscore-dangle */

let store;

store = createStore(
   starterKitReducer, /* preloadedState, */
   global.window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

/* eslint-enable */

export default () => (
  <Provider store={store}>
    <StarterKit
      onClick={() => store.dispatch(changeButtonMsg(store.getState().inputText))}
      onChange={event => store.dispatch(changeInputText(event.target.value))}
    />
  </Provider>
);
