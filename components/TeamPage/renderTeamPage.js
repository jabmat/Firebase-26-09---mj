import renderTodoForm from '../todoForm/renderTodoForm.js';
import {
	collection,
	addDoc,
	getDocs,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';
import { firestore } from '../../firebaseConfig.js';

export default function () {
	// zadanie 1 firestorm 05.10.2022
	// 1. Wybierz i wyczyść content container
	// 2. Stwórz element <h2>, textContent "Your team's todos", podepnij h2 do content containera
	// 3. Wywołaj funkcje renderTodoForm, wynik zapisz w zmiennej
	// 4. Podepnij todo form do content container
	// 5. Na todo form nałóż event listener.
	// W EL:
	// 6. Ściągnij wartość z todo inputu (todo text)
	// 7. Ściągnij wartość z radio inputów (kategorię)

	// rozwiązanie mj
	// 1.
	const contentContainer = document.querySelector('.content');
	contentContainer.innerHTML = '';
	// 2.
	const h2 = document.createElement('h2');
	h2.textContent = 'Your teams todos';
	contentContainer.appendChild(h2);
	// 3.
	const todoForm = renderTodoForm();
	// 4.
	contentContainer.appendChild(todoForm);
	// 5.
	todoForm.addEventListener('submit', function (event) {
		event.preventDefault();
		const todoText = document.getElementById('todo-input').value;
		const category = [...document.getElementsByName('category')].find(
			(input) => input.checked
		).value;

		// DODAWANIE DANYCH DO FIRESTORA
		// (działają na promise'ach)
		const addDocData = async function (todoText, category) {
			try {
				// wywołanie funkcji addDoc, addDoc służy do dodawania (tworzenia) nowych dokumentów w podanej kolekcji, w przypadku powodzenia, zwraca informacje na temat nowo dodanego dokumentu
				const docInfo = await addDoc(collection(firestore, 'teams'), {
					todoText,
					category,
				});
				console.log(docInfo);
			} catch (err) {
				console.error(err.message);
			}
		};
		addDocData(todoText, category);
	});
	// rozwiązanie mj
}
