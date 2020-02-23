import { createStore, combineReducers, applyMiddleware } from "redux";
import marketsReducer from "./marketsReducer";
import inputReducer from './inputReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    markets: marketsReducer,
    input: inputReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;