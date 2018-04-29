import { combineReducers } from './../external/redux';
import { answers } from './answers';
import { compare } from './compare';
import { currentView } from './currentView';

export const reducers = combineReducers({
  answers,
  compare,
  currentView,
});
