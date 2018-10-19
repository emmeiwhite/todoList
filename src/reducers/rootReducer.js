import {combineReducers} from 'redux';

import BooksReducer from './books';
import ActiveBook from './active_book';

export default combineReducers({
    books: BooksReducer,
    activeBook:ActiveBook
})