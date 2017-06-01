import { Actions } from 'react-native-router-flux';
import {Platform} from 'react-native';
import FCM, { FCMEvent, NotificationType, WillPresentNotificationResult, RemoteNotificationResult } from 'react-native-fcm';
import firebase from '../../firebase';
import * as firebaseHelper from '../../utils/firebaseHelper';
import * as ActionTypes from '../../constants/ActionTypes';

function loginRequest() {
  return {
    type: ActionTypes.LOGIN_REQUEST
  };
}

export function login(email, password) {
  return dispatch => {
    dispatch(loginRequest());
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then( (userData) => {
        const userID = userData.uid;
        firebaseHelper.getUser(userID)
          .then((userProfile)=>{
            dispatch(setProfileUser(userProfile));
            startApp(dispatch);
          })
      })
      .catch(error=>{
        dispatch(loginFailure());
        // throw error;
      })
  }
}

export function loginUserByToken() {
  return (dispatch) => {
    dispatch(loginRequest());
    return firebase.auth().onAuthStateChanged(userData => {
      if (userData) {
        const userID = userData.uid;
        firebaseHelper.getUser(userID)
          .then((userProfile)=>{
            dispatch(setProfileUser(userProfile));
            startApp(dispatch);
          })
      } else {
        dispatch(userNoExist());
      }
    });
  }
}

export const loginFailure = () => ({
  type: ActionTypes.LOGIN_FAILURE,
});

export const setProfileUser = (userData) => ({
  type: ActionTypes.SET_PROFILE_USER,
  payload: userData
});

export const userAuthorized = () => ({
  type: ActionTypes.USER_AUTHORIZED
});

export const logOutUser = () => {
  firebaseHelper.signOutUser();
  Actions.login();
  return {
    type: ActionTypes.LOGOUT_USER
  };
};

export const userNoExist = () => {
  firebaseHelper.signOutUser();
  Actions.login();
  return {
    type: ActionTypes.USER_NO_EXIST
  };
};

const startApp = (dispatch) => {
  dispatch(userAuthorized());
  FCM.requestPermissions();
  FCM.getFCMToken()
    .then(token => {
      // firebase.database().ref('users/' + userId).set({
      //   username: name,
      //   email: email,
      //   profile_picture : imageUrl
      // });
    });
  FCM.subscribeToTopic('/topics/foo-bar');
  FCM.on(FCMEvent.Notification, async (notif) => {
    console.log(notif);

    if (Platform.OS === 'ios') {
      switch (notif._notificationType) {
        case NotificationType.Remote:
          notif.finish(RemoteNotificationResult.NewData); //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
          break;
        case NotificationType.NotificationResponse:
          notif.finish();
          break;
        case NotificationType.WillPresent:
          notif.finish(WillPresentNotificationResult.All); //other types available: WillPresentNotificationResult.None
          break;
      }
    }
  });

  FCM.on(FCMEvent.RefreshToken, token => {
    console.log(token);
  });
  Actions.main();
};