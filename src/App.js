import React, { Component } from 'react';
import BookList from './containers/book_list';
import SelectedBook from './containers/selected_book';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <BookList />
         <SelectedBook />
      </div>
    );
  }
}

export default App;
