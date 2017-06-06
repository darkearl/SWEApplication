import firebase from '../firebase';
import * as ActionTypes from './types';
const notificationsRef = firebase.database().ref('notifications');

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


export const pushNotifications = (message) => {
  const userID = firebase.auth().currentUser.uid;
  return function (dispatch) {
    let msg = {
      message: message,
      time: Date.now(),
      status: 1,
      userID: userID
    };

    const newMsgRef = notificationsRef.push();
    msg.id = newMsgRef.key;
    newMsgRef.set(msg);
  };
};