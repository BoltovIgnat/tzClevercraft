import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Books from './components/Books';
import BooksDone from './components/BooksDone';
import BooksInProgress from './components/BooksInProgress';
import Filter from './components/Filter';


function App() {
	const { TabPane } = Tabs;
	const dispatch = useDispatch()

	let search = window.location.search


	let filter = <>
	</>;

	let tab = '1';

	if (search.trim() != '') {

		var arrayOfParams = search.slice(1, search.length).split('&');
		arrayOfParams.forEach(function(item, i, arr) {
			var arrayOfStrings = item.split('=');

			if (arrayOfStrings[0] == 'tags') {
				
				var arrayTags = arrayOfStrings[1].split(',');
				dispatch({ type: 'GET_FILTER', payload: arrayTags })

				filter = <>
					<Filter/>
				</>;

			} 
			if (arrayOfStrings[0] == 'tab') {
				
				if (arrayOfStrings[1] == 'done') {
					tab = '3';
				} else if (arrayOfStrings[1] == 'inprogress') {
					tab = '2';
				} else if (arrayOfStrings[1] == 'toread') {
					tab = '1';
				}
				
			}
		});
		
	} 
	
	return (
		<div className="App">
			<Tabs defaultActiveKey={tab} type="card" >
				<TabPane tab="To read" key="1">
					{filter}
					<Books />
				</TabPane>
				<TabPane tab="In progress" key="2">
					{filter}
					<BooksInProgress />
				</TabPane>
				<TabPane tab="Done" key="3">
					{filter}
					<BooksDone />
				</TabPane>
			</Tabs>
		</div>
	);
}

export default App;
