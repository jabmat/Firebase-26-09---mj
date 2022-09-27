import { auth } from '../../firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';

// W funkcji poniżej:
// 1. Wybranie i czyszczenie sekcji content (klasa 'content', querySelector, innerHTML = '')
// 2. Stwórz element <form> i nadaj mu id 'register-form'
// 3. Stwórz element <h2> i nadaj mu textContent 'Register'
// 4. Stwórz element <input>, nadaj mu type 'email', placeholder 'email', id 'input-email-register'
// 5. Stwórz element <input>, nadaj mu type 'password', placeholder 'password', id 'first-input-password-register'
// 6. Stwórz element <input>, nadaj mu type 'password', placeholder 'repeat password', id 'second-input-password-register'
// 7. Stwórz element <button>, nadaj mu type 'submit' i textContent 'Register'
// 8. Podepnij wszystkie elementy do elementu form (pkt 2) w tej kolejności:
// - h2
// - input email
// - input pass 1
// - input pass 2
// - submit button
// 9. Element form podepnij do sekcji content
// 10. Na formularz (pkt 2) nałóż event listener (będziemy reagować na submit, pamiętaj o event.preventDefault())
// 11. W event listenerze:
// - zbieracie zawartość wszystkich inputów do osobnych zmiennych (.value !!!)
// 12. Sprawdź console.logiem czy zbieranie wartości działa
// 13. Zaimportuj funkcję do index.js i podepnij ją pod loginButton

export default function () {
	const content = document.querySelector('.content');
	content.innerHTML = '';

	const form = document.createElement('form');
	form.setAttribute('id', 'register-form');

	const h2 = document.createElement('h2');
	h2.textContent = 'Register';

	const inputEmail = document.createElement('input');
	inputEmail.setAttribute('type', 'email');
	inputEmail.setAttribute('placeholder', 'email');
	inputEmail.setAttribute('id', 'input-email-register');

	const inputPass1 = document.createElement('input');
	inputPass1.setAttribute('type', 'password');
	inputPass1.setAttribute('placeholder', 'password');
	inputPass1.setAttribute('id', 'first-input-password-register');

	const inputPass2 = document.createElement('input');
	inputPass2.setAttribute('type', 'password');
	inputPass2.setAttribute('placeholder', 'repeat password');
	inputPass2.setAttribute('id', 'second-input-password-register');

	const submitButton = document.createElement('button');
	submitButton.setAttribute('type', 'submit');
	submitButton.textContent = 'Register';

	form.appendChild(h2);
	form.appendChild(inputEmail);
	form.appendChild(inputPass1);
	form.appendChild(inputPass2);
	form.appendChild(submitButton);

	content.appendChild(form);

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		const email = inputEmail.value;
		const pass1 = inputPass1.value;
		const pass2 = inputPass2.value;
		console.log('email:', email);
		console.log('pass1:', pass1);
		console.log('pass2:', pass2);

		if (pass1 === pass2 && pass1.length > 6 && pass2.length > 6) {
			createUserWithEmailAndPassword(auth, email, pass1)
				.then((userCredentials) => console.log(userCredentials))
				.catch((err) => console.log(err));
		} else {
			console.log('hasla nie sa takie same');
		}
	});
}
