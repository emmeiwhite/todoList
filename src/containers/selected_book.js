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
                <h3>{this.props.book.title}</h3>
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