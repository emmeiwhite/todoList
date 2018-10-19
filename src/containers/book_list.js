// A Container is a react component that has a direct connection to the state managed by redux.
// Often known as the Smart Component !!!
import React,{ Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book)=>{
            return ( // Directly returning JSX
                <li className="list-group-item" key={book.id}>{book.title}</li>
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

export default connect(mSTP)(BookList); //connect : Higher Order Component !!!