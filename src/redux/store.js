import { createStore, combineReducers } from "redux";
import marketsReducer from "./marketsReducer";
import inputReducer from './inputReducer';

const reducers = combineReducers({
    markets: marketsReducer,
    input: inputReducer
})

const store = createStore(reducers);

export default store;