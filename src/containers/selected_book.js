import React,{Component} from 'react';
import {connect} from 'react-redux';

class SelectedBook extends Component{
   render(){
       return(
           <div className="col-md-8">
                {this.props.selectedBook.title}
            </div>
       )
   }
}


const mSTP = (state)=>{
    return {
        selectedBook:state.currentBook
    }
}
export default connect(mSTP)(SelectedBook);