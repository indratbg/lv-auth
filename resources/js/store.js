import Vue from 'vue'
import Vuex from 'vuex'

import news from './stores/news.js'
import contact from './stores/contact.js'
import login from './stores/login.js'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        news,
        contact,
        login
    },
    state: {
        token: localStorage.getItem('token') || null,
        errors: [],
        success: []
    },
    getters: {
        loggedIn: state => {
            return state.token !== null
        }
    },
    mutations: {
        SET_TOKEN(state, payload) {
            state.token = payload
        },
        SET_ERRORS(state, payload) {
            state.errors = payload
        },
        CLEAR_ERRORS(state) {
            state.errors = []
        },
        SET_SUCCESS(state, payload) {
            state.success = payload
        },
        CLEAR_SUCCESS(state) {
            state.success = []
        },
    }
});

export default store
