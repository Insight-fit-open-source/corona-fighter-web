import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

/**
 * Redux middleware to make store.dispatch() return a promise which
 * will be fulfilled when another specified action is dispatched
 */
import createReduxWaitForMiddleware from 'redux-wait-for-action';

// Enables the use of Redux devtools in your browser (Need to install it seperately)
import { composeWithDevTools } from 'redux-devtools-extension';

// Polyfill fro all browsers just to understand es6 features
import es6promise from 'es6-promise';

import rootDefinition, { initialState } from './definitions';
import rootSaga from './sagas/index';

es6promise.polyfill();

// create the middleware and enhancers
export const sagaMiddleware = createSagaMiddleware();
export const waitForMiddleware = createReduxWaitForMiddleware();
export const composeEnhancers = composeWithDevTools({});

export default (initStore = {}) => {
  const store = createStore(
    rootDefinition,
    { ...initialState, ...initStore },
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
      applyMiddleware(waitForMiddleware),
    ),
  );

  // used by next-redux-saga to cancel sagas on the server
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
