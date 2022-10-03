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
				const category = checked.value;
				// console.log(checkedVal);

				// 3.
				push(todoRef, { todoText, category })
					.then(() => console.log('pushed the data'))
					.catch((err) => console.log('failed to push'));
			});
		} else {
			// gdy jest data?
			// console.log(data);

			// treść zadania
			// 1. Wyciągnij same obiekty todo z obiektu data (Object.values()) i zapisz do zmiennej todos
			// 2. Stwórz element <h2>, textContent "Add, remove and edit your todos"
			// 3. Stwórz zmienną listItems. Wartość zmiennej listItems to wywołanie metody .map((el, i) => { ... }) na liście todos (pkt 1).
			// W metodzie map:
			// 4. Stwórz element <li>, id `li-${i}`
			// 5. Stwórz element <div>, id `div-${i}`
			// 6. Stwórz element <span>, textContent ma zawierać todoText i category
			// 7. Stwórz element <button>, id `edit-button-${i}`, class "edit-button", textContent "Edit"
			// 8. Stwórz element <button>, id `remove-button-${i}`, class "remove-button", textContent "Remove"
			// 9. Do diva (pkt 5) podepnij span (pkt 6), edit button (pkt 7), remove button (pkt 8)
			// 10. Do li (pkt 4) podepnij diva (pkt 5)
			// 11. Z metody map zwróc li (return)
			// 12. console.log(listItems)
			// treść zadania

			// rozwiązanie mj
			// 1. (wyciąga wszystko po prawej dwukropku)
			const todos = Object.values(data);
			console.log(todos);
			// 2.
			const h2 = document.createElement('h2');
			h2.textContent = 'Add, remove and edit your todos';
			// 3.
			const listItems = todos.map((el, i) => {
				// 4.
				const li = document.createElement('li');
				li.setAttribute('id', `li-${i}`);
				// 5.
				const div = document.createElement('div');
				div.setAttribute('id', `div-${i}`);
				// 6.
				const span = document.createElement('span');
				span.textContent = `${el.todoText} (${el.category})`;
				// 7.
				const editButton = document.createElement('button');
				editButton.setAttribute('id', `edit-button-${i}`);
				editButton.setAttribute('class', 'edit-button');
				editButton.textContent = 'Edit';
				// 8.
				const removeButton = document.createElement('button');
				removeButton.setAttribute('id', `remove-button-${i}`);
				removeButton.setAttribute('class', 'remove-button');
				removeButton.textContent = 'Remove';
				// 9.
				div.appendChild(span);
				div.appendChild(editButton);
				div.appendChild(removeButton);
				li.appendChild(div);
				return li;
			});
			console.log(listItems);
			// rozwiązanie mj

			// zad 3 - wyrenderowanie todoForm w else, jeśli mamy date
			// 1. Stwórz element <ul>
			// 2. Na zmiennej listItems wywołaj metode forEach. W s®odku forEacha podpinaj elementy do listy ul (pkt 1)
			// 3. Wyczyść contentContainer
			// 4. Do content containera podepnij h2, todoForm (cC.apc(renderTodoForm())), ul (pkt 1)

			// rozwiązanie mj
			const ul = document.createElement('ul');
			listItems.forEach((el) => {
				ul.appendChild(el);
				contentContainer.innerHTML = '';
				contentContainer.appendChild(h2);
				contentContainer.appendChild(renderTodoForm());
				contentContainer.appendChild(ul);
			});
			// rozwiązanie mj
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
