import {createStore} from "vuex";

export default createStore({
    state:{
        name: '',
        description: '',
        executor: '',
        time: null,
        tasks: []
    },
    mutations:{
        addName(state, title){
            state.name = title;
        },
        addDescription(state, description){
            state.description = description;
        },
        addExecutor(state, executor){
            state.executor = executor;
        },
        addTime(state, time){
            state.time = time;
        },
    }
})