<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="card" style="width: 25rem;">
          <div class="card-header">
            <i class="fa fa-key"></i> Register
          </div>
          <div class="card-body">
            <form @submit.prevent="register" method="post">
              <div class="alert alert-danger" role="alert" v-if="errors.message">
                <strong>Error</strong>
                {{ errors.message }}
                <ul>
                  <li v-for="err in errors.errors" :key="err.id">{{ err[0] }}</li>
                </ul>
              </div>
              <div class="alert alert-success" role="alert" v-if="success.success">
                <strong>Success</strong>
                {{ success.success }}
              </div>
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
                <button type="submit" class="btn btn-primary">Register</button>
              </div>
              <div class="form-group">
                Register with :
                <button
                  class="btn btn-danger"
                  title="Google"
                  @click.prevent="AuthProvider('google')"
                >
                  <span class="fab fa-google"></span>
                </button>
                <button class="btn btn-primary" title="Twitter">
                  <span class="fab fa-twitter"></span>
                </button>
                <button class="btn btn-primary" title="Phone">
                  <span class="fas fa-mobile-alt"></span>
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
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null
    };
  },
  computed: {
    ...mapState({
      errors: state => state.errors,
      success: state => state.success
    })
  },
  methods: {
    ...mapActions("login", ["userRegister", "registerGoogle"]),
    register() {
      this.userRegister({
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      });
    },
    registerProvider() {
      window.location.replace("api/social/google");
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
