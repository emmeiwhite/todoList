// Action Creator is a javascript function that returns an object! Object being our action
const BOOK_SELECTED = 'BOOK_SELECTED'; // Action Type

export default function selectBook(book){
    console.log('The book that has been clicked from the list :'+book.title);
    return {
        type:BOOK_SELECTED,
        payload:book
    }
}

// Note that the action will pass through all the reducers and depending on the matched type the reducer will modify the piece of the application state


