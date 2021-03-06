import Vue from "vue";
import Vuex from "vuex";
import home from "./stores/home.js";
import footer from "./stores/footer.js";
import news from "./stores/news.js";
import contact from "./stores/contact.js";
import login from "./stores/login.js";
import user from "./stores/user.js";
import admin from "./stores/admin/admin.js";
import products from "./stores/products";
import swal from "sweetalert";
import adminnews from './stores/admin/adminnews';
import adminfooter from './stores/admin/adminfooter.js';
import adminproduct from "./stores/admin/adminproduct.js";


//Admin
import adminlogin from "./stores/admin/login"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        home,
        footer,
        news,
        contact,
        login,
        user,
        products,
        admin,
        adminlogin,
        adminnews,
        adminfooter,
        adminproduct
    },
    state: {
        token: localStorage.getItem("token") || null,
        errors: [],
        success: [],
        isLoading: false,
        app_name: "Kaos Harian",
        layout: 'frontend-layout'
    },
    getters: {
        loggedIn: state => {
            return state.token !== null;
        },
        getLayout: state => {
            return state.layout;
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
        },
        SET_LAYOUT(state, payload) {
            state.layout = payload;
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
            Vue.$snotify.html(`<div class="snotifyToast__title"><b>${payload.state.errors.message.substr(0,40)}</b></div>
            <div class="snotifyToast__body">${message}</div> <div class="snotify-icon snotify-icon--error"></div>`, {
                timeout: 2000,
                showProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                position: "rightTop",
                // titleMaxLength: 20,
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
                titleMaxLength: 10,
                bodyMaxLength: 200,
                type: 'success'
            });
        }
    }
});

export default store;