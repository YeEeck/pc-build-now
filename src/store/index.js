import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inner_component_data: null,
    },
    getters: {},
    mutations: {
        update_inner_component_data(state, data) {
            state.inner_component_data = data
        },
    },
    actions: {},
    modules: {},
})
