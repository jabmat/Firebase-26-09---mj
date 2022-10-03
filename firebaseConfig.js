// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';

// import dla TodoForm 29.09.2022
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js';

// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCE8b061N290brn66URmaxIa4gh3TPu8no',
	authDomain: 'zdfronpol13fbmj.firebaseapp.com',
	databaseURL:
		'https://zdfronpol13fbmj-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'zdfronpol13fbmj',
	storageBucket: 'zdfronpol13fbmj.appspot.com',
	messagingSenderId: '939195318415',
	appId: '1:939195318415:web:4bcb56dad11464430870fa',
	measurementId: 'G-L9R5LM5Z97',
};

// Initialize Firebase
// named export
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
