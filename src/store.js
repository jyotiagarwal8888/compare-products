import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { createLogger } from 'redux-logger';

const logger = createLogger();

function configureStore() {
  let middlewareEnhancer;
  let composeEnhancers;

  middlewareEnhancer = applyMiddleware(thunk, logger);
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      || (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
      || compose;


  return (createStore(rootReducer, composeEnhancers(
    middlewareEnhancer
  )))
}

export default configureStore;
