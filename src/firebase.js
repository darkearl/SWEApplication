import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyA_3mq0hNs3aooVn2FROx2rKtar78fiDn4",
  authDomain: "swe-contact.firebaseapp.com",
  databaseURL: "https://swe-contact.firebaseio.com",
  projectId: "swe-contact",
  storageBucket: "swe-contact.appspot.com",
  messagingSenderId: "271979946942"
};
firebase.initializeApp(config);
export default firebase;