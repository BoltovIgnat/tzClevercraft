import {all, call, put, takeEvery } from 'redux-saga/effects';

export function* sagaWatcher() {
  yield takeEvery('GET_ALL_BOOKS', sagaWorkerGetAllBooks)
  yield takeEvery('GET_ALL_BOOKS_ASYNC', sagaWorkerGetAllBooksAsunc)
}

function* sagaWorkerGetAllBooks(payload) {
  const result = yield call(sagaWorkerGetBook)
  yield put({ type: 'GET_ALL_BOOKS_IN_REDUX', result })
    
}

function* sagaWorkerGetAllBooksAsunc(payload) {
    console.log(payload);
}

async function sagaWorkerGetBook() {
  let result = await fetch('https://raw.githubusercontent.com/lastw/test-task/master/data/10-items.json')
  let json = '';

  if (result.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    json = await result.json();
  } else {
    alert("Ошибка HTTP: " + result.status);
  }
  
  return json;
}