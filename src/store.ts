import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            total: '$63,786.00',
        }
    },
    getters: {
        getTotal (state) {
            return state.total
        }
    },
    actions: {},
    mutations: {}
})

export default store;