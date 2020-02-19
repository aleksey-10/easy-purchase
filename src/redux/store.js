import { createStore, combineReducers } from "redux";
import marketsReducer from "./marketsReducer";
import storageReducer from './storageReducer';

const reducers = combineReducers({
    markets: marketsReducer
})

const store = createStore(reducers);

export default store;