// We will initially show up any book
const initialState =  {id:1,title:'The Great Warriors'};


export default function(state = initialState,action){
    const newState = {...state};
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
        default:
        return newState; // we are returning null instead of undefined: the default parameter null
    }
 
}