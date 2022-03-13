import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CardBookInProgress from './CardInProgress';
import Empty from './Empty';


function BooksInProgress() {

	const books = useSelector(store => store.books.booksInProgress)
	
	const dispatch = useDispatch()

	const listItems = books.map((book) => {
		return <CardBookInProgress params={book} />
	});

	useEffect(() => {
	  dispatch({
		type: 'GET_ALL_IN_PROGRESS_BOOKS',
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

export default BooksInProgress;