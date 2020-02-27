import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBWdGU3ZrUZPoV1lFUApzwY0zHWndctwTU",
  authDomain: "spotify-e78ce.firebaseapp.com",
  databaseURL: "https://spotify-e78ce.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

//this is a default export
export default base;