import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { booksReducer } from "./booksReducer";

export const rootReducer = combineReducers({
    test: testReducer,
    books: booksReducer,
})