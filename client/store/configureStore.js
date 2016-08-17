import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

export default function configureStore(initialState = {}) {
  const store = finalCreateStore(rootReducer, initialState)
  return store;
}
