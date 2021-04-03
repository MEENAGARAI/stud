import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCDM6H-ERi_Hx95nts_pIqVhMQ15GgxiKE",
  authDomain: "attendance-1827e.firebaseapp.com",
  databaseURL: "https://attendance-1827e-default-rtdb.firebaseio.com",
  projectId: "attendance-1827e",
  storageBucket: "attendance-1827e.appspot.com",
  messagingSenderId: "163741834692",
  appId: "1:163741834692:web:b5ec42c8791b0bf7e35891"
};


  firebase.initializeApp(firebaseConfig);

  export default firebase.database()