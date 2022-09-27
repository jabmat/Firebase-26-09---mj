// // 26.09 17:30 Firebase start:
// console.log('26.09 17:30 Firebase start:');
// named import
// import { app } from './firebaseConfig.js';
// console.log(app);
// index.js to jedyny plik, który wykona się przy załadowaniu strony

// zadowanie podstron
import renderHomePage from './components/HomePage/renderHomePage.js';

import renderRegisterForm from './components/RegisterForm/renderRegisterForm.js';

// console.log(content);

// selecting all navbar buttons
const homeButton = document.getElementById('home-anchor');
const todosButton = document.getElementById('todos-anchor');
const aboutButton = document.getElementById('about-anchor');
const publicButton = document.getElementById('public-anchor');
const loginButton = document.getElementById('login-anchor');

// rendering the home page on initial page load
renderHomePage();

// podpięcie homePage do homeButtona
homeButton.addEventListener('click', renderHomePage);

// podpięcie RegisterForm do loginButtona
loginButton.addEventListener('click', renderRegisterForm);
