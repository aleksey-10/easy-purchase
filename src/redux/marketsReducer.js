const ADD_ITEM = 'ADD-ITEM';
const SAVE_TO_LS = 'SAVE-TO-LOCAL-STORAGE';
const SET_TODOS = 'SET-TODOS';
const CLEAR_TODO_LIST = 'CLEAR-TODO-LIST';
const REMOVE_TODO = 'REMOVE-TODO';
const SET_TODO_ID = 'SET-TODO-ID';
const SET_TODO_COMPLETED = 'SET-TODO-COMPLETED';

const initState = {
    auchan: [],
    velmart: [],
    silpo: [],
    novus: [],
    other: []
}

const marketsReducer = (prevState = initState, action) => {
    switch (action.type) {
        case SET_TODOS:
            if (localStorage.getItem('todos') === null) {
                localStorage.setItem('todos', JSON.stringify(prevState));
                return prevState;
            }

            return JSON.parse(localStorage.getItem('todos'));

        case ADD_ITEM:
            return {
                ...prevState,
                [action.marketName]: [
                    ...prevState[action.marketName],
                    {
                        id: prevState[action.marketName].length,
                        title: action.title,
                        value: action.value,
                        completed: false
                    }
                ]
            }

        case SAVE_TO_LS:
            localStorage.setItem('todos', JSON.stringify(prevState));

            return prevState;

        case CLEAR_TODO_LIST:
            return {
                ...prevState,
                [action.marketName]: []
            }

        case REMOVE_TODO:
            return {
                ...prevState,
                [action.marketName]: prevState[action.marketName]
                    .filter(todo => todo.id !== action.id)
            }

        case SET_TODO_ID:
            return {
                ...prevState,
                [action.marketName]: prevState[action.marketName].map((todo, index) => {
                    todo.id = index;
                    return todo;
                })
            }

        case SET_TODO_COMPLETED:
            return {
                ...prevState,
                [action.marketName]: prevState[action.marketName].map(todo => {
                    if (todo.id === action.id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }


        default:
            return prevState;
    }
}

export default marketsReducer;

export let addItemAC = (marketName, title, value) =>
    ({ type: ADD_ITEM, marketName, title, value })
export let saveToLSAC = () => ({ type: SAVE_TO_LS })
export let setTodosAC = () => ({ type: SET_TODOS })
export let clearTodoListAC = marketName => ({ type: CLEAR_TODO_LIST, marketName })
export let removeTodoAC = (marketName, id) => ({ type: REMOVE_TODO, marketName, id })
export let setTodoIdAC = marketName => ({ type: SET_TODO_ID, marketName })
export let setTodoCompletedAC = (marketName, id) =>
    ({ type: SET_TODO_COMPLETED, marketName, id })