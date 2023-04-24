import { combineReducers } from "redux";
import filtersReducers from "./filters";
import pizzasReducers from "./pizzas";

const rootReduser = combineReducers({
    filters: filtersReducers,
    pizzas: pizzasReducers
})

export default rootReduser;