import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBUfySHa3xbDFosFWBXHlR1o4E7zVcUOSw",
    authDomain: "vue-projects-8b935.firebaseapp.com",
    projectId: "vue-projects-8b935",
    storageBucket: "vue-projects-8b935.appspot.com",
    messagingSenderId: "76226660680",
    appId: "1:76226660680:web:0ca07b84354f97ad91cb7d"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)
  //init authentication service
  const projectAuth = firebase.auth()
  //init firestore service
  const projectFirestore = firebase.firestore()
  //in order to use timestamps
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, projectAuth, timestamp}