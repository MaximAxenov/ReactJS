import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCSiRXPT51VbvtzUXVeaB7XQJcRJbjJ2Zo",
  authDomain: "v-mes-443a3.firebaseapp.com",
  projectId: "v-mes-443a3",
  storageBucket: "v-mes-443a3.appspot.com",
  messagingSenderId: "461405965218",
  appId: "1:461405965218:web:985b130a4d81c80d0a00fb",
  measurementId: "G-V7K19ZD7QC"
};

export const initFB = () => firebase.initializeApp(firebaseConfig);
