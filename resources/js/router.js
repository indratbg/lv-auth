import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/home/Home.vue";
import Contact from "./pages/contact/Contact.vue";
import NotFound from "./pages/layouts/NotFound.vue";

import News from "./pages/news/News.vue";
import Newslist from "./pages/news/Newslist.vue";
import ViewNews from "./pages/news/ViewNews.vue";
import AdminNewsEdit from "./pages/admin/news/Edit.vue";

import Login from "./pages/login/Login.vue";
import store from "./store.js";
import Logout from "./pages/user/Logout.vue";
import Register from "./pages/login/Register.vue";
import Dashboard from "./pages/user/Dashboard.vue";
import Account from "./pages/user/Account.vue";
import UserDashboard from "./pages/user/User.vue";

import Profile from "./pages/user/Profile.vue";
import Security from "./pages/user/Security.vue";

//Products
import Products from "./pages/products/Products.vue";
import Productslist from "./pages/products/Productslist.vue";
import Productsview from "./pages/products/View.vue";

//Forgot Password
import ForgotPassword from "./pages/login/ForgotPassword.vue";
import ResetPassword from "./pages/login/ResetPassword.vue";

//admin
import AdminLogin from "./pages/admin/AdminLogin.vue";
import AdminParent from "./pages/admin/AdminParent.vue";
import AdminDashboard from "./pages/admin/Dashboard.vue";

//News
import AdminNews from "./pages/admin/news/News.vue";
import AdminNewsList from "./pages/admin/news/List.vue";
import AdminNewsAdd from "./pages/admin/news/Add.vue";
import AdminNewsView from "./pages/admin/news/View.vue";

//footer
import AdminFooter from "./pages/admin/footer/Footer.vue";
import AdminFooterList from "./pages/admin/footer/List.vue";
import AdminFooterAdd from "./pages/admin/footer/Add.vue";
import AdminFooterView from "./pages/admin/footer/View.vue";
import AdminFooterEdit from "./pages/admin/footer/Edit.vue";

//Setting
import AdminSetting from "./pages/admin/setting/Setting.vue";

//Profile
import AdminProfile from "./pages/admin/profile/Profile.vue";

//Products
import AdminProducts from "./pages/admin/products/Products.vue";
import AdminProductsList from "./pages/admin/products/List.vue";
import AdminProductsStock from "./pages/admin/products/Stock.vue";
import AdminProductAdd from "./pages/admin/products/Add.vue";
import AdminProductview from "./pages/admin/products/View.vue";
import AdminProductEdit from "./pages/admin/products/Edit.vue";

//Orders
import AdminOrders from "./pages/admin/orders/Order.vue";
import AdminOrdersList from "./pages/admin/orders/List.vue";
import AdminOrdersInvoice from "./pages/admin/orders/Invoice.vue";

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
            path: "/products",
            component: Products,
            children: [{
                    path: "",
                    name: "products.list",
                    component: Productslist
                },
                {
                    path: "view/:id",
                    name: "products.view",
                    component: Productsview
                },
                {
                    path: "*",
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
            path: "/api/password/reset",
            name: "reset.password",
            component: ResetPassword
        },
        {
            path: "/logout",
            name: "logout",
            component: Logout
        },
        {
            path: "/auth/:provider/callback",
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
                            path: "profile",
                            name: "user.account.profile",
                            component: Profile
                        },
                        {
                            path: "security",
                            name: "user.account.security",
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
            path: "/v1/control/admin/login",
            name: "admin.login",
            component: AdminLogin,
            meta: {
                layout: "plain-layout"
            }
        },
        {
            path: "/v1/control/admin",
            component: AdminParent,
            meta: {
                layout: "backend-layout",
                requiresAuthAdmin: true
            },
            children: [{
                    path: "/",
                    name: "admin.dashboard",
                    component: AdminDashboard,
                    meta: {
                        layout: "backend-layout"
                    }
                },
                {
                    path: "product",
                    component: AdminProducts,
                    meta: {
                        layout: "backend-layout"
                    },
                    children: [{
                            path: "list",
                            component: AdminProductsList,
                            name: 'admin.product.list',
                            meta: {
                                layout: "backend-layout"
                            }
                        },
                        {
                            path: "add",
                            component: AdminProductAdd,
                            name: 'admin.product.add',
                            meta: {
                                layout: "backend-layout"
                            }
                        },
                        {
                            path: "view/:id",
                            component: AdminProductview,
                            name: 'admin.product.view',
                            meta: {
                                layout: "backend-layout"
                            }
                        },
                        {
                            path: "edit/:id",
                            component: AdminProductEdit,
                            name: 'admin.product.edit',
                            meta: {
                                layout: "backend-layout"
                            }
                        }
                    ]
                },
                {
                    path: "footer",
                    component: AdminFooter,
                    meta: {
                        layout: "backend-layout"
                    },
                    children: [{
                            path: "list",
                            name: "admin.footer.list",
                            component: AdminFooterList,
                            meta: {
                                layout: "backend-layout"
                            }
                        },
                        {
                            path: "add",
                            name: "admin.footer.add",
                            component: AdminFooterAdd,
                            meta: {
                                layout: "backend-layout"
                            }
                        },
                        {
                            path: "view/:id",
                            name: "admin.footer.view",
                            component: AdminFooterView,
                            meta: {
                                layout: "backend-layout"
                            }
                        },
                        {
                            path: "edit/:id",
                            name: "admin.footer.edit",
                            component: AdminFooterEdit,
                            meta: {
                                layout: "backend-layout"
                            }
                        }
                    ]
                },
                {
                    path: "news",
                    component: AdminNews,
                    meta: {
                        layout: "backend-layout"
                    },
                    children: [{
                            path: "list",
                            name: "admin.news.list",
                            component: AdminNewsList,
                            meta: {
                                layout: "backend-layout"
                            }
                        },
                        {
                            path: "add",
                            name: "admin.news.add",
                            component: AdminNewsAdd,
                            meta: {
                                layout: "backend-layout"
                            }
                        },
                        {
                            path: "view/:post_date/:title",
                            name: "admin.news.view",
                            component: AdminNewsView,
                            meta: {
                                layout: "backend-layout"
                            }
                        },
                        {
                            path: "edit/:post_date/:title",
                            name: "admin.news.edit",
                            component: AdminNewsEdit,
                            meta: {
                                layout: "backend-layout"
                            }
                        }
                    ]
                },
                {
                    path: "setting",
                    name: "admin.setting",
                    component: AdminSetting,
                    meta: {
                        layout: "backend-layout"
                    }
                },
                {
                    path: "profile",
                    name: "admin.profile",
                    component: AdminProfile,
                    meta: {
                        layout: "backend-layout"
                    }
                },
                {
                    path: "products",
                    component: AdminProducts,
                    children: [{
                            path: "",
                            name: "admin.products.list",
                            component: AdminProductsList,
                            meta: {
                                layout: "backend-layout"
                            }
                        },
                        {
                            path: "stock",
                            name: "admin.products.stock",
                            component: AdminProductsStock,
                            meta: {
                                layout: "backend-layout"
                            }
                        }
                    ]
                },
                {
                    path: "orders",
                    component: AdminOrders,
                    children: [{
                            path: "",
                            name: "admin.orders.list",
                            component: AdminOrdersList,
                            meta: {
                                layout: "backend-layout"
                            }
                        },
                        {
                            path: "invoice",
                            name: "admin.orders.invoice",
                            component: AdminOrdersInvoice,
                            meta: {
                                layout: "backend-layout"
                            }
                        }
                    ]
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
    store.commit("CLEAR_SUCCESS");
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
    if (to.matched.some(record => record.meta.layout)) {
        store.commit("SET_LAYOUT", to.meta.layout);
    }

    //Admin
    if (to.matched.some(record => record.meta.requiresAuthAdmin)) {
        let auth = store.getters.loggedIn;
        if (!auth) {
            next({
                name: "admin.login"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;