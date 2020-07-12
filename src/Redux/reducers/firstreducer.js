/*

a reducer is function which returns some object with property values 

*/


export const firstReducer = (state={message:"World is too big!!!"},action)=>{

    switch(action.type){

        case "MESSAGE_ACTION":
                       return {message: action.data}  
        default:
                       return state;
    
    }
}


export const secondReducer = (state={message:"World is too small!!!"},action)=>{

    switch(action.type){

        case "SECOND_ACTION":
                       return {message: action.data};
        default:
                       return state;
    
    }
}

export const peopleReducer = (state= {people:[]},action)=>{
    switch(action.type){
        case "PEOPLE_ACTION":
                      return {people: action.data};
        default:
                      return state;
    }
}
