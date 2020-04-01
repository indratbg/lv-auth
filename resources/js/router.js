import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home/Home.vue'
import Contact from './pages/contact/Contact.vue'
import News from './pages/news/News.vue'
import NotFound from './pages/layouts/NotFound.vue'
import ViewNews from './pages/news/ViewNews.vue'
import Login from './pages/login/Login.vue'
import store from './store.js'
import Dashboard from './pages/user/dashboard.vue'
import Logout from './pages/user/Logout.vue'
import Register from './pages/login/Register.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/news/:post_date/:title',
            name: 'viewnews',
            component: ViewNews
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        },
        {
            path: '/:username/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})
router.beforeEach((to, from, next) => {
    store.commit('CLEAR_ERRORS')
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.loggedIn
        if (!auth) {
            next({
                name: 'login'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
