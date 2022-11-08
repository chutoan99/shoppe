import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCce4lFiYYm9p7hh4WIGv0rNkQhaziFhw0',
  authDomain: 'shopee-1116a.firebaseapp.com',
  projectId: 'shopee-1116a',
  storageBucket: 'shopee-1116a.appspot.com',
  messagingSenderId: '1025413390226',
  appId: '1:1025413390226:web:240ffb262aa77182066b4b',
  measurementId: 'G-2JDC2SZB5L',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const providerGG = new GoogleAuthProvider();
const providerFb = new FacebookAuthProvider();
export { db, auth, providerGG, providerFb };
