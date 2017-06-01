import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

//import another reducer
import userReducer from '../containers/Login/reducer';
import notificationsReducer from '../containers/ListNotification/reducer';

const  reducers = combineReducers({
  form: formReducer,
  user: userReducer,
  notifications: notificationsReducer
});
export default reducers;