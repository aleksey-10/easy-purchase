const ON_CHANGE = 'ON-CHANGE-TITLE';
const ON_SUBMIT_TODO = 'ON-SUBMIT-TODO';

const initState = {
    title: '',
    value: 0
}

const inputReducer = (prevState = initState, action) => {

    switch (action.type) {
        case ON_CHANGE:
            return {
                ...prevState,
                [action.dataName]: action.data
            }

        case ON_SUBMIT_TODO:
            return {
                title: '',
                value: 0
            }

        default:
            return prevState;
    }
}

export default inputReducer;

export let onChangeAC = (dataName, data) => ({ type: ON_CHANGE, dataName, data })
export let onSubmitTodoAC = () => ({ type: ON_SUBMIT_TODO })