import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CardBook from './Card';
import Empty from './Empty';
import Filter from './Filter';


function Books() {

	let books = useSelector(store => store.books.booksToRead)
	const filter = useSelector(store => store.books.filter)

	const dispatch = useDispatch()

	if (filter.length != 0) {
		books = books.filter(function (book) {
			let result = false;
			filter.forEach(function (item) {
				if (book.tags.includes(item)) result = true;
			});

			return result;
		})
	}

	const listItems = books.map((book) => {
		return <CardBook params={book} />
	});


	useEffect(() => {
		dispatch({
			type: 'GET_ALL_BOOKS',
		})
	}, []);

	function EmptyPage() {
		if (listItems.length == 0) {
			return <Empty />
		} else {
			return (
				<div>
					{listItems}
				</div>
			)
		}
	}

	return (
		<div>
			<EmptyPage />
		</div>
	)
}

export default Books;
