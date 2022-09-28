// W funkcji:
// 1. Stwórz element <form> i nadaj mu id 'login-form'
// 2. Stwórz element <input> i nadaj mu type 'email', id 'input-email-login', placeholder 'email'
// 3. Stwórz element <input>, nadaj mu type 'password', id 'input-password-login', placeholder 'password'
// 4. Stwórz element <button>, nadaj mu type 'submit' i textContent 'Sign in'
// 5. Podepnij oba inputy i button do elementu form (pkt 1)
// 6. Zwróc element <form> z funkcji przy pomocy returna.

export default function () {
	// const content = document.querySelector('.content');
	// content.innerHTML = '';

	const loginForm = document.createElement('form');
	loginForm.setAttribute('id', 'login-form');

	const inputEmail = document.createElement('input');
	inputEmail.setAttribute('type', 'email');
	inputEmail.setAttribute('id', 'input-email-login');
	inputEmail.setAttribute('placeholder', 'email');

	const inputPass = document.createElement('input');
	inputPass.setAttribute('type', 'password');
	inputPass.setAttribute('id', 'input-password-login');
	inputPass.setAttribute('placeholder', 'password');

	const submitButton = document.createElement('button');
	submitButton.setAttribute('type', 'submit');
	submitButton.textContent = 'Sign in';

	loginForm.appendChild(inputEmail);
	loginForm.appendChild(inputPass);
	loginForm.appendChild(submitButton);
	// content.appendChild(loginForm);
	return loginForm;
}
