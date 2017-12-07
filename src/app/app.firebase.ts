import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBShXmN6TIS7xy2Tnr65NkCJbAEXM51g7Q',
  authDomain: 'mpc-app-37f6f.firebaseapp.com',
  databaseURL: 'https://mpc-app-37f6f.firebaseio.com',
  projectId: 'mpc-app-37f6f',
  storageBucket: 'mpc-app-37f6f.appspot.com',
  messagingSenderId: '351355658098'
};

const FbApp = firebase.initializeApp(firebaseConfig);
module.exports.FBApp = FbApp.database();
