// zadanie
// treść
// 1. Importy: obiekt storage z firebaseConfig; uploadBytes i ref z "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js"
// W funkcji:
// 2. Wybranie i czyszczenie content container
// 3. Stwórz element <h2>, textContent "Store your files via our app!", podepnij od razu do content container
// 4. Stwórz element <form>, id "file-form"
// 5. Stwórz element <input>, id 'file-input', !!! type "file" !!!, accept "image/png, image/jpg, image/jpeg"
// 6. Stwórz element <button>, id "file-form-submit-button", type "submit", textContent "Upload"
// 7. Podepnij file input i submit button do forma (pkt 4)
// 8. Sam form podepnij do content containera
// rozwiązanie mj
// 1.
import { storage, auth } from '../../firebaseConfig.js';
import {
	uploadBytes,
	ref,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js';

// rozwiązanie mj

export default function () {
	// 2.
	const contentContainer = document.querySelector('.content');
	contentContainer.innerHTML = '';
	// 3.
	const h2 = document.createElement('h2');
	h2.textContent = 'Store your files via our app!';
	contentContainer.appendChild(h2);
	// 4.
	const fileForm = document.createElement('form');
	fileForm.setAttribute('id', 'file-form');
	// 5.
	const fileInput = document.createElement('input');
	fileInput.setAttribute('id', 'file-input');
	fileInput.setAttribute('type', 'file');
	fileInput.setAttribute('accept', 'image/png, image/jpg, image/jpeg');
	// 6.
	const submitButton = document.createElement('button');
	submitButton.setAttribute('id', 'file-form-submit-button');
	submitButton.setAttribute('type', 'submit');
	submitButton.textContent = 'Upload';
	// 7.
	fileForm.appendChild(fileInput);
	fileForm.appendChild(submitButton);
	// 8.
	contentContainer.appendChild(fileForm);

	fileForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const file = fileInput.files[0];
		// console.log(file);
		const storageRef = ref(storage, `/users/${auth.currentUser.uid}/avatar`);
		uploadBytes(storageRef, file)
			.then(() => console.log('Uploaded the file successfully'))
			.catch(() => console.log('Failed to upload the file'));
	});
}
