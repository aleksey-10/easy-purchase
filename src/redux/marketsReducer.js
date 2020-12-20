import todoAPI from "../api/api";

const ADD_TODO = 'ADD_TODO';
const SAVE_TO_LS = 'SAVE_TO_LOCAL_STORAGE';
const SET_TODOS = 'SET_TODOS';
const CLEAR_TODO_LIST = 'CLEAR_TODO_LIST';
const REMOVE_TODO = 'REMOVE_TODO';
const SET_TODO_ID = 'SET_TODO_ID';
const SET_TODO_COMPLETED = 'SET_TODO_COMPLETED';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const COMPLETED_ALL = 'COMPLETED_ALL';
const EDIT_TODO_AC = 'EDIT_TODO_AC';

const initState = {
    auchan: [],
    velmart: [],
    novus: [],
    silpo: [],
    fair: [],
    fetching: true
}

const marketsReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {
                ...state,
                ...action.markets
            }

        case ADD_TODO:
            return {
                ...state,
                [action.marketName]: [
                    ...state[action.marketName],
                    action.todo
                ]
            }

        case SAVE_TO_LS:
            localStorage.setItem('todos', JSON.stringify(state));

            return state;

        case CLEAR_TODO_LIST:
            return {
                ...state,
                [action.marketName]: []
            }

        case REMOVE_TODO:
            return {
                ...state,
                [action.marketName]: state[action.marketName]
                    .filter(todo => todo.id !== action.id)
            }

        case SET_TODO_ID:
            return {
                ...state,
                [action.marketName]: state[action.marketName].map((todo, index) => {
                    todo.id = index;
                    return todo;
                })
            }

        case SET_TODO_COMPLETED:
            return {
                ...state,
                [action.marketName]: state[action.marketName].map(todo => {
                    if (todo.id === action.id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }

        case TOGGLE_FETCHING:
            return { ...state, fetching: !state.fetching }

        case COMPLETED_ALL:
            return {
                ...state,
                [action.marketName]: state[action.marketName].map(todo => {
                    todo.completed = action.completed;
                    return todo;
                })
            }

        case EDIT_TODO_AC:
            return {
                ...state,
                [action.marketName]: state[action.marketName].map(todo => {
                    if (action.id === todo.id) todo = {...todo, ...action.data}
                    return todo
                })
            }

        default:
            return state;
    }
}

export default marketsReducer;

export let addTodoAC = (marketName, todo) => ({ type: ADD_TODO, marketName, todo })
export let saveToLSAC = () => ({ type: SAVE_TO_LS })
export let setTodoAC = (markets) => ({ type: SET_TODOS, markets })
export let clearTodoListAC = marketName => ({ type: CLEAR_TODO_LIST, marketName })
export let removeTodoAC = (marketName, id) => ({ type: REMOVE_TODO, marketName, id })
export let setTodoCompletedAC = (marketName, id) =>
    ({ type: SET_TODO_COMPLETED, marketName, id })
export let toggleFetching = () => ({ type: TOGGLE_FETCHING })
export let toggleCompleteAll = (marketName, completed) => ({ type: COMPLETED_ALL, marketName, completed });
let editTodoAC = (marketName, id, data) => ({ type: EDIT_TODO_AC, marketName, id, data })

export const setTodos = () => dispatch => {
    todoAPI.getTodos().then(data => {
        if (data !== null) {

            const payload = {};

            for (let marketName in data) {
                payload[marketName] = Object.keys(data[marketName]).map(key => ({
                    ...data[marketName][key],
                    id: key
                }))
            }

            dispatch(setTodoAC(payload));
        }

        dispatch(toggleFetching());
    });
}

export const addTodo = (marketName, title, value) => dispatch => {
    todoAPI.postTodo(marketName, title, value)
        .then(data => {
            dispatch(addTodoAC(marketName, { title, value, id: data.name, completed: false }))
        })
}

export const removeTodo = (marketName, id = '') => dispatch => {
    todoAPI.deleteTodo(marketName, id);

    !id ? dispatch(clearTodoListAC(marketName)) : dispatch(removeTodoAC(marketName, id));
}

export const setCompleted = (marketName, todo) => dispatch => {
    todoAPI.toggleCompleted(marketName, todo.id, !todo.completed)

    dispatch(setTodoCompletedAC(marketName, todo.id))
}

export const setCompletedAll = (marketName, market) => dispatch => {

    let allCompleted = market.filter(todo => !todo.completed).length;

    dispatch(toggleCompleteAll(marketName, allCompleted));

    market.map(todo => (
        todoAPI.toggleCompleted(marketName, todo.id, allCompleted)
    ))
}

export const editTodo = (marketName, id, data) => dispatch => {
    todoAPI.editTodo(marketName, id, data)

    dispatch(editTodoAC(marketName, id, data))
}