import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCzI5KAbnHH_X8C4kHH88Q-fs4chLwo2rE",
  authDomain: "chatgpt-clone-252ae.firebaseapp.com",
  projectId: "chatgpt-clone-252ae",
  storageBucket: "chatgpt-clone-252ae.appspot.com",
  messagingSenderId: "56544453368",
  appId: "1:56544453368:web:dda64ae29c18fecc40110d"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}