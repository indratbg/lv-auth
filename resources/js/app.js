require("./bootstrap");
import Vue from "vue";
import router from "./router.js";
import store from "./store.js";
import App from "./App.vue";

import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use(CKEditor);

//Layout
import FrontEnd from "./pages/layouts/FrontEnd.vue";
import BackEnd from "./pages/layouts/BackEnd.vue";
import Plain from "./pages/layouts/Plain.vue";

Vue.component("frontend-layout", FrontEnd);
Vue.component("backend-layout", BackEnd);
Vue.component("plain-layout", Plain);

import VueAxios from "vue-axios";
import VueSocialauth from "vue-social-auth";
import axios from "axios";
import swal from "sweetalert";
import Snotify, {
    SnotifyPosition,
    SnotifyStyle
} from "vue-snotify";

const options = {
    timeout: 2000,
    showProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    position: "rightTop",
    titleMaxLength: 30
};

Vue.use(Snotify, options);

Vue.use(VueAxios, axios);

Vue.use(VueSocialauth, {
    providers: {
        google: {
            clientId: "754068476730-ffkfcp9jjcr8364r6jdjf29i2pjb5q8j.apps.googleusercontent.com",
            clientSecret: "9aWCDk7qjjv5tZWkcMdRUs9O",
            redirectUri: "http://lv-auth.com/api/social/google/callback" // Your client app URL
        }
    }
});

new Vue({
    el: "#app",
    router,
    store,
    components: {
        App
    },
    beforeCreate() {
        Vue.$snotify = this.$snotify;
    }
});
