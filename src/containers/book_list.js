// A Container is a react component that has a direct connection to the state managed by redux.
// Often known as the Smart Component !!!
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import selectBook from './../store/index'; // Action Creator Being Imported !!!

class BookList extends Component{
    renderList(){
        return this.props.books.map((book)=>{
            return ( // Directly returning JSX
                <li className="list-group-item" key={book.id} onClick={this.props.bookSelected}>{book.title}</li>
            )
        })
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
          
        )
    }
}

const mSTP = (state)=>{
    // Whatever is returned from this function will show up as props in this Container!
    // Usually we return the object
    return {
        books: state.books
    }
}

const mDTP = (dispatch) =>{
    return bindActionCreators({
        bookSelected:selectBook
    },dispatch); // dispatch is a method, it makes sure that the actions reach all the reducers
}

export default connect(mSTP,mDTP)(BookList); //connect : Higher Order Component !!!