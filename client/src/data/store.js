import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { auth } from './module/auth';

const reducer = combineReducers({
  auth: auth,
});

const store = createStore(reducer, {}, applyMiddleware(thunkMiddleware));

export default store;
