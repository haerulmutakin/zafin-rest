import firebase from 'firebase-admin';
import serviceAccount from '../firebase/zaida-finance-firebase-adminsdk.js';

export default firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
})