import React,{Component} from 'react';
import {connect} from 'react-redux';

class SelectedBook extends Component{
   
   render(){
    if(!this.props.book){
        return (
            <div>Please select a book </div>
        )

    }
       return(
           <div className="col-md-8">
                <h2>BOOK Details are as follows:</h2>
                <h4>NAME : {this.props.book.title}</h4>
                <h4>PAGES: {this.props.book.pages}</h4>
            </div>
       )
   }
}


const mSTP = (state)=>{
    return {
        book:state.activeBook
    }
}
export default connect(mSTP)(SelectedBook);