<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel fixed-top bg-white">
            <router-link class="navbar-brand" :to="{ name: 'home' }">
                {{ app_name }}
            </router-link>
             <form class="form-inline my-2 d-flex d-block d-block d-md-none">
                    <input class="form-control mr-md-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
            <button
                class="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home' }">
                            <i class="fa fa-home" aria-hidden="true"></i>
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            :to="{ name: 'products.list' }"
                        >
                            <i class="fas fa-shopping-cart"></i> Products
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            :to="{ name: 'news.list' }"
                        >
                            <i class="fa fa-lightbulb-o"></i> Idea
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'contact' }">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            Contact Us
                        </router-link>
                    </li>
                </ul>


                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <li class="nav-item">
                        <router-link
                            v-if="!isLogin"
                            class="nav-link"
                            :to="{ name: 'login' }"
                            >Login</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            v-if="!isLogin"
                            class="nav-link"
                            :to="{ name: 'register' }"
                            >Register</router-link
                        >
                    </li>
                    <li class="nav-item dropdown" v-if="isLogin">
                        <a
                            href="#"
                            id="navbarDropdown"
                            class="nav-link dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <img
                                width="32"
                                height="32"
                                :src="avatar"
                                class="rounded-circle"
                            />
                            {{ user.name }}
                            <span class="caret"></span>
                        </a>

                        <div
                            class="dropdown-menu dropdown-menu-right"
                            aria-labelledby="navbarDropdown"
                        >
                            <router-link
                                class="nav-link"
                                :to="{ name: 'user.dashboard' }"
                                >Dashboard</router-link
                            >
                            <div class="dropdown-divider"></div>
                            <router-link
                                class="nav-link"
                                :to="{ name: 'user.account.profile' }"
                                >Account</router-link
                            >
                            <router-link
                                class="nav-link"
                                :to="{ name: 'logout' }"
                                >Logout</router-link
                            >
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters(["loggedIn"]),
        isLogin() {
            let authUser = this.loggedIn;
            if (authUser) {
                this.getUserDetail().catch(error => {
                    this.$store.dispatch("login/userLogout");
                    this.$router.push({ name: "login" });
                });
            }
            return authUser;
        },
        ...mapState({
            app_name: state => state.app_name,
            user: state => state.user.auth,
            errors: state => state.errors
        }),
        avatar() {
            return this.user.avatar;
        }
    },

    methods: {
        ...mapActions("user", ["getUserDetail"])
    }
};
</script>
