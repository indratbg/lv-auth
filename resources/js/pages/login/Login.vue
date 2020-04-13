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
            <div class="alert alert-danger" role="alert" v-if="errors.length > 0">
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
                <button type="submit" class="btn btn-primary">Login</button>

                <router-link
                  href="#"
                  class="btn btn-link"
                  :to="{ name: 'forgot.password' }"
                >Forgot password ?</router-link>
              </div>
              <div class="form-group">
                <button class="btn btn-block btn-danger" @click.prevent="loginProvider('google')">
                  Login with
                  <i class="fab fa-google" aria-hidden="true"></i>
                </button>
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
      errors: state => state.errors
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
    },
    loginProvider(provider) {
      var self = this;

      this.$auth
        .authenticate(provider)
        .then(response => {
          self.SocialLogin(provider, response);
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

    SocialLogin(provider, response) {
      this.$http
        .post("/sociallogin/" + provider, response)
        .then(response => {
          console.log(response.data.errors);

          if (response.data.errors) {
            this.$store.commit("SET_ERRORS", response.data.errors, {
              root: true
            });
          } else {
            this.$store.commit("SET_TOKEN", response.data.access_token, {
              root: true
            });
            localStorage.setItem("token", response.data.access_token);
            this.$router.push({ name: "user.dashboard" });
          }
        })
        .catch(err => {
          console.log({ err: err });
        });
    }
  }
};
</script>
