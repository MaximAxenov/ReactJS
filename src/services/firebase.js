import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDy34dOG9yB7gJ8qkq_GilyAlOazTDErOw",
  authDomain: "v-mes-2.firebaseapp.com",
  projectId: "v-mes-2",
  storageBucket: "v-mes-2.appspot.com",
  messagingSenderId: "424866467903",
  appId: "1:424866467903:web:38204b671c2c327987688a"
};

firebase.initializeApp(firebaseConfig);


export const db = firebase.database();
export const auth = firebase.auth();