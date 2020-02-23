const ON_CHANGE_FORM = 'ON-CHANGE-FORM';
const ON_SUBMIT_TODO = 'ON-SUBMIT-TODO';

const initState = {
    form: {
        title: '',
        value: 0
    }

}

const inputReducer = (state = initState, action) => {

    switch (action.type) {
        case ON_CHANGE_FORM:
            return {
                ...state,
                form: { ...state.form, [action.dataName]: action.data }
            }

        case ON_SUBMIT_TODO:
            return {
                ...state,
                form: { title: '', value: 0 }
            }

        default:
            return state;
    }
}

export default inputReducer;

export let onChangeAC = (dataName, data) => ({ type: ON_CHANGE_FORM, dataName, data })
export let onSubmitTodoAC = () => ({ type: ON_SUBMIT_TODO })