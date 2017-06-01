import firebase from '../../firebase';
import * as ActionTypes from '../../constants/ActionTypes';


const startFetchingNotifications = () => ({
  type: ActionTypes.START_FETCHING_ALL_NOTIFICATIONS
});

const receivedNotifications = () => ({
  type: ActionTypes.RECEIVED_NOTIFICATIONS,
  receivedAt: Date.now()
});

export const fetchNotifications = () => {
  return function (dispatch) {
    dispatch(startFetchingNotifications());

    firebase.database()
      .ref('notifications')
      .orderByKey()
      .limitToLast(20)
      .on('value', (snapshot) => {
        // gets around Redux panicking about actions in reducers
        setTimeout(() => {
          const notifications = snapshot.val() || [];
          dispatch(receiveNotifications(notifications))
          dispatch(receivedNotifications());
        }, 0);
      });
  }
}

const receiveNotifications = (notifications) => ({
  type: ActionTypes.ADD_NOTIFICATIONS,
  payload: notifications
});