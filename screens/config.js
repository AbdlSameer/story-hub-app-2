import firebase from 'firebase'



var firebaseConfig = {
    apiKey: "AIzaSyBUg-GRV0ri-tEWoiq_Jys67WMxKPdc3Y0",
    authDomain: "story-hub-26bcb.firebaseapp.com",
    projectId: "story-hub-26bcb",
    databaseURL: "https://story-hub-26bcb.firebaseio.com",
    storageBucket: "story-hub-26bcb.appspot.com",
    messagingSenderId: "553887734339",
    appId: "1:553887734339:web:2eaa89cf29ec706473d2f6",
    measurementId: "G-0KL2JX4LDZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  export default firebase.firestore()