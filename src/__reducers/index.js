import { combineReducers } from 'redux';
import { dashboard } from './dashboard'
import { users } from './users'
import { course } from './course'
import {curriculum} from './curriculum'
import {student} from './student'
import {lecturer} from './lecturer'
import {section} from './section'
import {registrationSchedule} from './registrationSchedule';

const rootReducer = combineReducers({
  dashboard,
  course,
  users,
  curriculum,
  student,
  lecturer,
  section,
  registrationSchedule,
});

export default rootReducer;
