const initialStore = {
	booksToRead: [
		{
			"id": "id-1",
			"author": "Dr. Axel Rauschmayer",
			"title": "Speaking JavaScript",
			"description": "An in-depth guide to JavaScript. Cover: all of JavaScript, up to and including ES5. Required knowledge: any programming language (ideally, an object-oriented one)",
			"tags": [
				"javascript",
				"es5",
				"es6",
				"must read",
				"easy"
			]
		},
		{
			"id": "id-2",
			"author": "Douglas Crockford",
			"title": "JavaScript: The Good Parts",
			"description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
			"tags": [
				"javascript",
				"boring",
				"crockford"
			]
		},
		{
			"id": "id-3",
			"author": "Nick Morgan",
			"title": "JavaScript for Kids: A Playful Introduction to Programming",
			"description": "JavaScript for Kids is a lighthearted introduction that teaches programming essentials through patient, step-by-step examples paired with funny illustrations. You’ll begin with the basics, like working with strings, arrays, and loops, and then move on to more advanced topics, like building interactivity with jQuery and drawing graphics with Canvas.",
			"tags": [
				"javascript",
				"canvas",
				"kids",
				"programming"
			]
		},
	], 
	booksInProgress: [],
	booksDone: [],
	countbooksToRead:43,
	countbooksInProgress:43,
	countbooksDone:43,
	filter:[]
}

export const booksReducer = (store = initialStore, action) => {
	switch (action.type) {
		case 'GET_ALL_BOOKS':
			return { ...store }
		case 'GET_IN_PROGRESS_BOOKS':

			let newBooksToRead = store.booksToRead.slice();
			let newBooksInProgress = store.booksInProgress.slice();
			//console.log('newBooksToRead', newBooksToRead);
			let id = action.idBook;

			let el = newBooksToRead.find((item) => item.id === id)
			//console.log('el', el);
			newBooksToRead = newBooksToRead.filter(function (item) {
				return item.id !== id;
			});

			newBooksInProgress.push(el);

			return { ...store, 
				booksToRead: newBooksToRead, 
				booksInProgress: newBooksInProgress,
				countbooksToRead: newBooksToRead.length,
				countbooksInProgress: newBooksInProgress.length,
			}

		case 'GET_ALL_IN_PROGRESS_BOOKS':
			return { ...store }
		case 'GET_DONE_BOOKS':

			let newBookInProgress = store.booksInProgress.slice();
			let newBooksDone = store.booksDone.slice();

			let idBook = action.idBook;

			let find = newBookInProgress.find((item) =>
				item.id === idBook
			)

			newBookInProgress = newBookInProgress.filter(function (item) {
				return item.id !== idBook;
			});

			newBooksDone.push(find);


			return { ...store, 
				booksInProgress: newBookInProgress, 
				booksDone: newBooksDone,
				countbooksInProgress: newBookInProgress.length,
				countbooksDone: newBooksDone.length,
			}

		case 'GET_ALL_DONE_BOOKS':
			return { ...store }
		case 'GET_TO_READ_BOOKS':

			let newBookDone = store.booksDone.slice();
			let newBookToRead = store.booksToRead.slice();

			let idBooks = action.idBook;

			let li = newBookDone.find((item) =>
				item.id === idBooks
			)

			newBookDone = newBookDone.filter(function (item) {
				return item.id !== idBooks;
			});

			newBookToRead.push(li);

			return { ...store, 
				booksDone: newBookDone, 
				booksToRead: newBookToRead,
				countbooksDone: newBookDone.length,
				countbooksToRead: newBookToRead.length, }
		case 'GET_FILTER': 
			console.log(action);
			return {...store, filter: action.payload}
		case 'GET_ALL_BOOKS_IN_REDUX': 
			console.log(action);
			return {...store, booksToRead: [].concat(store.booksToRead.slice(),action.result.items)}
		default: return store
	}
}

