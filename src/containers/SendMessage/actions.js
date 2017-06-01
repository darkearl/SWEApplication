import firebase from '../../firebase';
import * as ActionTypes from '../../constants/ActionTypes';
const notificationsRef = firebase.database().ref('notifications');
// const pushNotifications = (notifications) => ({
//   type: ActionTypes.PUSH_NOTIFICATION,
//   payload: notifications
// });

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