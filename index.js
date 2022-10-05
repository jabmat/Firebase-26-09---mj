// // 26.09 17:30 Firebase start:
// console.log('26.09 17:30 Firebase start:');
// named import
// import { app } from './firebaseConfig.js';
// console.log(app);
// index.js to jedyny plik, który wykona się przy załadowaniu strony

// załadowanie podstron
import renderHomePage from './components/HomePage/renderHomePage.js';

import renderRegisterForm from './components/RegisterForm/renderRegisterForm.js';

import renderLoginForm from './components/LoginForm/renderLoginForm.js';

import renderLoginPage from './components/LoginPage/renderLoginPage.js';

import {
	onAuthStateChanged,
	signOut,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';

import { auth } from './firebaseConfig.js';

// importy do todo form 29.09.2022
import renderTodoForm from './components/todoForm/renderTodoForm.js';
import renderTodoPage from './components/TodoPage/renderTodoPage.js';
import renderTeamPage from './components/TeamPage/renderTeamPage.js';
// console.log(content);

// selecting the content container
const contentContainer = document.querySelector('.content');

// selecting all navbar buttons
const homeButton = document.getElementById('home-anchor');
const todosButton = document.getElementById('todos-anchor');
const aboutButton = document.getElementById('about-anchor');
const publicButton = document.getElementById('public-anchor');
const loginButton = document.getElementById('login-anchor');

//  reagowanie na zalogowanie i wylogowanie
onAuthStateChanged(auth, (user) => {
	if (user) {
		console.log(`User is logged in (${user.email}), onAuthStateChanged`);
		loginButton.textContent = 'Log out';
	} else {
		console.log(`No user is logged in, onAuthStateChanged`);
		loginButton.textContent = 'Log in';
		renderHomePage();
	}
});

// rendering the home page on initial page load
renderHomePage();
// contentContainer.appendChild(renderTodoForm());
// renderLoginForm();

// sprawdzanie

// podpięcie homePage do homeButtona:
// home button listener
homeButton.addEventListener('click', renderHomePage);

// podpięcie RegisterForm do loginButtona
// loginButton.addEventListener('click', renderRegisterForm);
// loginButton.addEventListener('click', renderLoginPage);

// login button listener
loginButton.addEventListener('click', () => {
	const user = auth.currentUser;
	if (user) {
		signOut(auth);
	} else {
		renderLoginPage();
	}
});

todosButton.addEventListener('click', renderTodoPage);

publicButton.addEventListener('click', renderTeamPage);
