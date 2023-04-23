import { combineReducers } from "redux";
import filltersReducers from "./fillters";
import pizzasReducers from "./pizzas";

const rootReduser = combineReducers({
    fillters: filltersReducers,
    pizzas: pizzasReducers
})

export default rootReduser;