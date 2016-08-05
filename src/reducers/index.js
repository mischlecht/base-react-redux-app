import { combineReducers } from 'redux';
import homeReducers from './reducers';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  homeReducers,
  routing: routerReducer
});

export default rootReducer;
