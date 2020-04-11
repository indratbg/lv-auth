require("./bootstrap");

import Vue from "vue";
import router from "./router.js";
import store from "./store.js";
import App from "./App.vue";

import VueAxios from "vue-axios";
import VueSocialauth from "vue-social-auth";
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.use(VueSocialauth, {
    providers: {
        google: {
            clientId: '754068476730-ffkfcp9jjcr8364r6jdjf29i2pjb5q8j.apps.googleusercontent.com',
            clientSecret: '9aWCDk7qjjv5tZWkcMdRUs9O',
            redirectUri: 'http://lv-auth.com/api/social/google/callback' // Your client app URL
        }
    }
})

new Vue({
    el: "#app",
    router,
    store,
    components: {
        App
    }
});
