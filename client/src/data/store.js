import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { auth } from './module/auth';
import { surveys } from './module/surveys';
import { reducer as reduxFormReducer } from 'redux-form';

const reducer = combineReducers({
  auth,
  surveys,
  form: reduxFormReducer,
});

const initialState = {};
const enhancers = [];
const middleware = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(reducer, initialState, composedEnhancers);

export default store;
