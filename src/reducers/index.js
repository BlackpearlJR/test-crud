import { combineReducers } from 'redux';
// import reports from './reports';
// import auth from './auth';
// import user from './user';
import resources from './resources';
import notifications from './notifications';

const rootReducer = combineReducers({
  resources,
  notifications
});

export default rootReducer;