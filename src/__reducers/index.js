import { combineReducers } from 'redux';
import { dashboard } from './dashboard'
import { users } from './users'
import { course } from './course'

const rootReducer = combineReducers({
  dashboard,
  course,
  users
});

export default rootReducer;
