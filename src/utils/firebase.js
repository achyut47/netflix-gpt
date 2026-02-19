// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDBxuOpJyRJBlCiCrvWIyFRIPK9IKi5hrE',
	authDomain: 'netflixgpt-3fe12.firebaseapp.com',
	projectId: 'netflixgpt-3fe12',
	storageBucket: 'netflixgpt-3fe12.firebasestorage.app',
	messagingSenderId: '220951748659',
	appId: '1:220951748659:web:ec4a1ddd0e74c694bc0346',
	measurementId: 'G-RCMVKRXB9G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
