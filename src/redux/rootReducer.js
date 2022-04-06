import { combineReducers } from "redux";

import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import foodReducer from "./foods/foodReducer";

const rootReducer=combineReducers({
    food:foodReducer,
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

export default rootReducer