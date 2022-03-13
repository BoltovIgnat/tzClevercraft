import { RetweetOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CardBookDone from './CardDone';
import Empty from './Empty';


function BooksDone() {

	const books = useSelector(store => store.books.booksDone)

	const dispatch = useDispatch()

	const listItems = books.map((book) => {
		return <CardBookDone params={book} />
	});

	useEffect(() => {
		dispatch({
			type: 'GET_ALL_DONE_BOOKS',
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

export default BooksDone;