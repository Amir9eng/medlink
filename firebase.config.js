// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCCJ4SghqrJlSA0a_PSvqBPjqa-6YIyn0M',
  authDomain: 'medlink-81d30.firebaseapp.com',
  projectId: 'medlink-81d30',
  storageBucket: 'medlink-81d30.appspot.com',
  messagingSenderId: '556426532230',
  appId: '1:556426532230:web:850d0680df63aafcb10807',
  measurementId: 'G-WQ86349PJB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCCJ4SghqrJlSA0a_PSvqBPjqa-6YIyn0M',
//   authDomain: 'medlink-81d30.firebaseapp.com',
//   projectId: 'medlink-81d30',
//   storageBucket: 'medlink-81d30.appspot.com',
//   messagingSenderId: '556426532230',
//   appId: '1:556426532230:web:850d0680df63aafcb10807',
//   measurementId: 'G-WQ86349PJB',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Auth with AsyncStorage persistence
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

// // Initialize Analytics (optional)
// const analytics = getAnalytics(app);

// export { auth, analytics };
