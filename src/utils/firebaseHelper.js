import firebase from '../firebase';

export const auth = firebase.auth();
const db = firebase.database();

export const getUser = (userid) => {
  return db
    .ref(`users/${userid}`)
    .once('value')
    .then( snapshot => {
        let userProfile = snapshot.val();
        if (userProfile === null) {
          // userProfile = createNewUser(userid);
        }
        return Promise.resolve(userProfile)
      }
    )
};

export const createNewUser = (userId) => {
  let userProfile = {
    "userID" : userId,
    "displayName": '',
    "email": ''
  };
  db.ref('users/' + userId).set(userProfile);
  db.ref('groups/All/users/'+ userId).set(true);
  return Promise.resolve(userProfile);
};

export const removeUser = (userId) => {
  db.ref('users/' + userId).set(null);
  db.ref('groups/All/users/'+ userId).set(null);
  return true;
};

export const signOutUser = () => {
  auth.signOut();
};

export const updateProfile = (userData) => {
  const userId = userData.uid;
  let userProfile = {
    "userID" : userId,
    "displayName": '',
    "email": userData.email
  };
  db.ref('users/' + userId).set(userProfile);
  db.ref('groups/All/users/'+ userId).set(true);
  return Promise.resolve(userProfile);
};