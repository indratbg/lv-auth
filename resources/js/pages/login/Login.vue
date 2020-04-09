<template>
    <div>
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <div class="card" style="width:22rem">
                    <div class="card-header">
                        <i class="fa fa-key"></i> Login
                    </div>
                    <div class="card-body">
                        <div
                            class="alert alert-danger"
                            role="alert"
                            v-if="errors"
                        >
                            <p>{{ errors }}</p>
                        </div>
                        <form @submit.prevent="login" method="post">
                            <div class="form-group">
                                <label for="email">E-Mail</label>
                                <input
                                    type="email"
                                    class="form-control col-md-12"
                                    name="email"
                                    v-model="email"
                                    autocomplete="username"
                                />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    class="form-control col-md-12"
                                    name="password"
                                    v-model="password"
                                    autocomplete="current-password"
                                />
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                <router-link
                                    href="#"
                                    class="btn btn-link"
                                    :to="{ name: 'forgot.password' }"
                                    >Forgot password ?</router-link
                                >
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
    data() {
        return {
            email: "indra.tbg@gmail.com",
            password: "secret"
        };
    },
    created() {
        if (this.loggedIn) {
            this.$router.push({ name: "user.dashboard" });
        }
    },
    computed: {
        ...mapState({
            errors: state => state.login.errors
        }),
        ...mapGetters(["loggedIn"])
    },
    methods: {
        ...mapActions("login", ["userLogin"]),
        async login() {
            await this.userLogin({
                email: this.email,
                password: this.password
            })
                .then(response => {
                    this.$router.push({
                        name: "user.dashboard"
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
