const ADD_ITEM = 'ADD-ITEM';

const initState = {
    auchan: [{id: 0, title: 'Milk', value: 25}],
    velmart: [ {id: 0, title: 'Cheese', value: 50}],
    silpo: [{id: 0, title: 'Vegatables', value: 20}],
    novus: [{id: 0, title: 'Fish', value: 25}],
    other: [{id: 0, title: 'Fruit', value: 25}]
}

let marketsReducer = (prevState = initState, action) => {
    let state;

    switch (action.type){
        case ADD_ITEM:
            console.log(prevState);
            return {
                ...prevState,
                [action.market]: [...prevState[action.market], {title: action.title, value: action.value }]
            }

        default:
            return prevState;
    }
}

export default marketsReducer;

export let addItemAC = (market, title, value) => ({type: ADD_ITEM, market, title, value})