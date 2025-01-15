import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyD730EEiXyqcU-bWyuCE0hVz3ccaf47FKs',
  authDomain: 'personfinder-9d94b.firebaseapp.com',
  projectId: 'personfinder-9d94b',
  storageBucket: 'personfinder-9d94b.firebasestorage.app',
  messagingSenderId: '734363308254',
  appId: '1:734363308254:web:2d3a87441d0ab18834324f',
  measurementId: 'G-L3HH3EPL23',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
