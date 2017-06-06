import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Navigation from './Navigation';

import userReducer from './User';
import notificationsReducer from './Notifications';

export default combineReducers({
  nav: Navigation,
  form: formReducer,
  user: userReducer,
  notifications: notificationsReducer
});