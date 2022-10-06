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

	// zad 1 06.10.2022
	// treść
	// 1. Stwórz element <ul>, id "teams-todo-list"
	// 2. Stwórz funkcję asynchroniczną readDocData
	// W readDocData:
	// 3. Stwórz zmienną querySnapshot i wywołaj w niej funkcję getDocs
	// Funkcja getDocs przyjmuje 1 argument, jest to referencja do grupy dokumentów (kolekcji)
	// Aby uzyskać referencję do interesującej nas kolekcji musimy użyć funkcji collection, przyjmuje ona 2 argumenty: obiekt ref do firestore i nazwę kolekcji w stringu
	// 4. Na zmiennej querySnapshot wywołaj forEach'a.
	// W FE:
	// 5. Stwórz zmienną docData i przypisz jej wywołanie funkcji data() na elemencie po którym aktualnie iterujesz (1 par z FE)
	// 6. Stwórz element <li>, textContent ma zawierać todoText i category, jedno i drugie znajdziesz w zmiennej docData (pkt 5)
	// 7. Podepnij li (pkt 6) do ul (pkt 1)
	// KONIEC FE
	// 8. Wywołanie readDocData
	// 9. Podepnij ul (pkt 1) do contentContainera.
	// rozwiązanie mj
	// 1.
	const ul = document.createElement('ul');
	ul.setAttribute('id', 'teams-todo-list');
	// 2.
	async function readDocData() {
		// 3.
		const querySnapshot = await getDocs(collection(firestore, 'teams'));
		// argument - funkcja collection, referencja do grupy obiektów (kolekcji)
		// 4.
		querySnapshot.forEach((el) => {
			// 5.
			const docData = el.data();
			// 6.
			const li = document.createElement('li');
			li.textContent = `${docData.todoText} (${docData.category})`;
			// 7.
			ul.appendChild(li);
		});
	}
	// 8.
	readDocData();
	contentContainer.appendChild(ul);
	// rozwiązanie mj
}
