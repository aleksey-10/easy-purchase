import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://easy-purchase-e225b.firebaseio.com/"
});

const todoAPI = {
    getTodos() {
        return instance.get('/markets.json').then(response => response.data)
    },

    postTodo(marketName, title, value) {
        return instance.post(`markets/${marketName}.json`, { title, value, completed: false })
            .then(response => response.data);
    },

    deleteTodo(marketName, id) {
        return instance.delete(`markets/${marketName}/${id}.json`)
    },

    toggleCompleted(marketName, id, completed) {
        return instance.put(`markets/${marketName}/${id}/completed.json`, completed  )
    },

    editTodo(marketName, id, data) {
        const dataName = Object.keys(data)[0];
        
        return instance.put(`markets/${marketName}/${id}/${dataName}.json`, JSON.stringify(data[dataName]) )
    }
};

export default todoAPI;

