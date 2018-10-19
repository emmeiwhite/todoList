// We will initially show up any book
const initialState =  {id:1,title:'The Great Warriors'};

export default function(state = initialState,action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
            
        default:
            return state;
    }
}