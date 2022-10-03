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

			todoForm.addEventListener('submit', (event) => {
				event.preventDefault();
				const todoText = document.getElementById('todo-input').value;
				// 1. Ściągnij odpowiednią kategorie z formularza (z radio inputów), wszystkie radio inputy mają atrybut name "category", istnieje selektor do wybierania elementów po atrybucie name. Zamień nodeListe na zwykły array. Do znalezienia inputa który jest zaznaczony użyj metody .find(). Input zaznaczony będzie miał własność checked, po niej szukaj właściwego inputu.
				// 2. Z tego inputu ściągnij value.
				// 3. Użyj funkcji push (z firebase'a) do wrzucenia danych do bazy.
				// Zamiast funkcji ref() użyj zmiennej todoRef (wyżej w tym pliku)
				// 4. Na funkcji push dodaj thena z console.log'iem "Pushed the data" i catcha z console.log'iem "failed to push"
				// push(todoRef, {
				//  todoText,
				// category,
				//}) tutaj then i catch
				// 1.
				const radioInputs = document.getElementsByName('category');
				console.log(radioInputs);

				const radioInputsA = Array.from(radioInputs);
				console.log(radioInputsA);

				const checked = radioInputsA.find((element) => element.checked);
				console.log(checked);

				// 2.
				const foundVal = checked.value;
				// console.log(checkedVal);

				// 3.
				push(todoRef, { todoText, foundVal })
					.then(() => console.log('pushed the data'))
					.catch((err) => console.log('failed to push'));
			});
		}
	});
}

// {
//     todos: {
//         evruibveiub453452354: {
//             todo1: {name: 'Wyjdź z psem', category: 'work'}
//         }
//     }
// }
