import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import {createLogger} from 'redux-logger';
import { loginUserByToken } from './actions/User';

// add the middlewares
let middlewares = [];

// add thunk middleware
middlewares.push(thunkMiddleware);

// add logger middleware
const logger = createLogger({
  collapsed:true,
  duration:true
});
middlewares.push(logger);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// create the store
const store = createStore(reducers, middleware);

if (module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(reducers)
  })
}

store.dispatch(loginUserByToken());
// export
export { store, reducers };