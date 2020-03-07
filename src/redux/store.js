import { createStore, combineReducers, applyMiddleware } from "redux";
import marketsReducer from "./marketsReducer";
import inputReducer from './inputReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
    markets: marketsReducer,
    input: inputReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;