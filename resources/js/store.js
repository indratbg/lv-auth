import Vue from 'vue'
import Vuex from 'vuex'

import news from './stores/news.js'
import contact from './stores/contact.js'


Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        news,
        contact
    }
});

export default store
