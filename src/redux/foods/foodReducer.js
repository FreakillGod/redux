import { ADD_FOOD } from "./foodsTypes"

const initalState={
    numberOfFoods:40
}

const foodReducer=(state=initalState,action)=>{
    switch(action.type){
        case ADD_FOOD:
            return{
                ...state,numberOfFoods:state.numberOfFoods+2
            }
        default: return state;
    }
}

export default foodReducer