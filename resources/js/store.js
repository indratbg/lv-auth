import Vue from "vue";
import Vuex from "vuex";

import news from "./stores/news.js";
import contact from "./stores/contact.js";
import login from "./stores/login.js";
import user from "./stores/user.js";
import products from "./stores/products";
import swal from "sweetalert";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        news,
        contact,
        login,
        user,
        products
    },
    state: {
        token: localStorage.getItem("token") || null,
        errors: [],
        success: [],
        isLoading: false,
        app_name: "Kaos Keren"
    },
    getters: {
        loggedIn: state => {
            return state.token !== null;
        }
    },
    mutations: {
        SET_TOKEN(state, payload) {
            state.token = payload;
        },
        SET_ERRORS(state, payload) {
            state.errors = payload;
            this.dispatch("showErrors", payload);
        },
        CLEAR_ERRORS(state) {
            state.errors = [];
        },
        SET_SUCCESS(state, payload) {
            state.success = payload;
            this.dispatch("showSuccess", payload)
        },
        CLEAR_SUCCESS(state) {
            state.success = [];
        },
        SET_LOADING(state, payload) {
            state.isLoading = payload;
        }
    },
    actions: {
        showErrors(payload) {
            let errors = [];
            let message = "";
            if (payload.state.errors.errors) {
                errors = Object.entries(payload.state.errors.errors);

                errors.forEach(value => {
                    message += value[1][0] + `<br/>`;
                });
            }

            //notifyjs
            Vue.$snotify.html(`<div class="snotifyToast__title"><b>${payload.state.errors.message}</b></div>
            <div class="snotifyToast__body">${message}</div> <div class="snotify-icon snotify-icon--error"></div>`, {
                timeout: 2000,
                showProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                position: "rightTop",
                titleMaxLength: 30,
                bodyMaxLength: 200,
                type: 'error'
            });
        },
        showSuccess(payload) {

            //notifyjs
            Vue.$snotify.html(`<div class="snotifyToast__title"><b>Successfully</b></div>
            <div class="snotifyToast__body">${payload.state.success}</div> <div class="snotify-icon snotify-icon--success"></div>`, {
                timeout: 2000,
                showProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                position: "rightTop",
                titleMaxLength: 30,
                bodyMaxLength: 200,
                type: 'success'
            });
        }
    }
});

export default store;