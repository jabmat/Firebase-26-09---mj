import renderTodoForm from '../todoForm/renderTodoForm.js';
import { auth, database } from '../../firebaseConfig.js';
import {
	ref,
	onValue,
	push,
	update,
	remove,
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js';

export default function () {
	const contentContainer = document.querySelector('.content');

	const todoRef = ref(database, 'todos/' + auth.currentUser.uid);

	onValue(todoRef, (snapshot) => {
		const data = snapshot.val();

		if (!data) {
			// robimy to co chemy zrobic gdy danych nie ma:
			// 1. Czyszczenie content container
			// 2. Stwórz element <h2, textContent 'Add, remove and edit your todos'
			// 3. Podepnij h2 pod contentContainer
			// 4. Wywołaj funkcję renderTodoForm i zapisz wynik wywołania do zmiennej
			// 5. Podepnij todoForm do content containera
			// 6. Podepnij event listener fo todo forma (event submit)
			// 7. Wybranie todo inputa (id: "todo-input") i ściągnięcie z niego wartości (.value)

			// 1.
			contentContainer.innerHTML = '';

			// 2.
			const headerTodo = document.createElement('h2');
			headerTodo.textContent = 'Add, remove and edit your todos';

			// 3.
			contentContainer.appendChild(headerTodo);

			// 4.
			const todoForm = renderTodoForm();

			// 5.
			contentContainer.appendChild(todoForm);

			todoForm.addEventListener('submit', function (event) {
				const input = document.getElementById('todo-input').value;
			});
		}
	});
}
