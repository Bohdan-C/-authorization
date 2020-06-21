import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(combineReducers({ reducer }), composeWithDevTools(applyMiddleware(thunk)))


export default store;