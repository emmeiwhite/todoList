import {combineReducers} from 'redux';

import BooksReducer from './books';
import ActiveBook from './books';

export default combineReducers({
    books: BooksReducer,
    currentBook:ActiveBook
})