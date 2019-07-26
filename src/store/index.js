/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/*
 * Local import
 */
// Reducer
import reducer from './reducer';
import ajaxMiddleware from './ajaxMiddleware';

const appliedMiddlewares = applyMiddleware(ajaxMiddleware);
/*
 * Code
 */

// createStore
const enhancers = compose(
  appliedMiddlewares,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  reducer,
  process.env.NODE_ENV === 'development' ? enhancers : appliedMiddlewares
);

/*
 * Export
 */
export default store;