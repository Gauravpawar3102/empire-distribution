import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: 'empire-distribution.firebaseapp.com',
  projectId: 'empire-distribution',
  storageBucket: 'empire-distribution.appspot.com',
  messagingSenderId: '278723189433',
  appId: '1:278723189433:web:19c838c1f6f22f919d9968',
  measurementId: 'G-6KQKDTN4TL',
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
