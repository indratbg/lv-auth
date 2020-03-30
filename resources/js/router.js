import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home/Home.vue'
import Contact from './pages/contact/Contact.vue'
import News from './pages/news/News.vue'
import NotFound from './pages/layouts/NotFound.vue'
import ViewNews from './pages/news/ViewNews.vue'

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
            path: '*',
            component: NotFound
        }
    ]
})


export default router
