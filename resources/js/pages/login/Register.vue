<template>
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="card" style="width: 25rem;">
          <div class="card-header">
            <i class="fa fa-key"></i> Register
          </div>
          <div class="card-body">
            <form @submit.prevent="register" method="post">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" class="form-control" v-model="name" />
              </div>
              <div class="form-group">
                <label for="email">E-Mail</label>
                <input
                  type="email"
                  class="form-control"
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
                  autocomplete="new-password"
                />
              </div>
              <div class="form-group">
                <label for="password_confirmation">Password Confirmation</label>
                <input
                  type="password"
                  class="form-control col-md-12"
                  name="password_confirmation"
                  v-model="password_confirmation"
                  autocomplete="new-password"
                />
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-6">
                    <button type="submit" class="btn btn-block btn-primary">Register</button>
                  </div>
                  <div class="col-6">
                    <button
                      class="btn btn-block btn-danger"
                      title="Google"
                      @click.prevent="
                                                AuthProvider('google')
                                            "
                    >
                      Register with
                      <span class="fab fa-google"></span>
                    </button>
                  </div>
                </div>
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null
    };
  },
  methods: {
    ...mapActions("login", ["userRegister"]),
    register() {
      this.$store.commit("SET_LOADING", true);
      this.userRegister({
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      });
    },
    AuthProvider(provider) {
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
        .post("/socialregister/" + provider, response)
        .then(response => {
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
