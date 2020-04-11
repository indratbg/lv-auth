import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/home/Home.vue";
import Contact from "./pages/contact/Contact.vue";
import NotFound from "./pages/layouts/NotFound.vue";

import News from "./pages/news/News.vue";
import Newslist from "./pages/news/Newslist.vue";
import ViewNews from "./pages/news/ViewNews.vue";

import Login from "./pages/login/Login.vue";
import store from "./store.js";
import Logout from "./pages/user/Logout.vue";
import Register from "./pages/login/Register.vue";
import Dashboard from "./pages/user/Dashboard.vue";
import Account from "./pages/user/Account.vue";
import UserDashboard from "./pages/user/User.vue";

import Profile from './pages/user/Profile.vue';
import Security from './pages/user/Security.vue';

//Products
import Products from './pages/products/Products.vue';
import Productslist from './pages/products/Productslist.vue';
import Productsview from './pages/products/View.vue';

//Forgot Password
import ForgotPassword from './pages/login/ForgotPassword.vue';

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/news",
            component: News,
            children: [{
                    path: "",
                    name: "news.list",
                    component: Newslist
                },
                {
                    path: ":post_date/:title",
                    name: "news.view",
                    component: ViewNews
                }
            ]
        },
        {
            path: '/products',
            component: Products,
            children: [{
                    path: "",
                    name: 'products.list',
                    component: Productslist
                },
                {
                    path: 'view/:id',
                    name: 'products.view',
                    component: Productsview
                },
                {
                    path: '*',
                    component: NotFound
                }
            ]
        },

        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/forgotpassword",
            name: "forgot.password",
            component: ForgotPassword
        },
        {
            path: "/logout",
            name: "logout",
            component: Logout
        },
        {
            path: '/auth/:provider/callback',
            component: {
                template: '<div class="auth-component"></div>'
            }
        },
        {
            path: "/user",
            component: Dashboard,
            meta: {
                requiresAuth: true
            },
            children: [{
                    path: "",
                    name: "user.dashboard",
                    component: UserDashboard
                },
                {
                    path: "account",
                    name: "user.account",
                    component: Account,
                    children: [{
                            path: 'profile',
                            name: 'user.account.profile',
                            component: Profile
                        },
                        {
                            path: 'security',
                            name: 'user.account.security',
                            component: Security
                        }
                    ]
                },
                {
                    path: "*",
                    component: NotFound
                }
            ]
        },
        {
            path: "*",
            component: NotFound
        }
    ]
});
router.beforeEach((to, from, next) => {
    store.commit("CLEAR_ERRORS");
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.loggedIn;
        if (!auth) {
            next({
                name: "login"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
