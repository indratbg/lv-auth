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
            <div class="alert alert-danger" role="alert" v-if="errors">
              <p>{{ errors}}</p>
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
              <button type="submit" class="btn btn-primary">Login</button>
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
      email: "indra.tbg@gmail.com",
      password: "secret"
    };
  },
  computed: mapState({
    errors: state => state.login.errors
  }),
  methods: {
    ...mapActions("login", ["userLogin"]),
    login() {
      this.userLogin({
        email: this.email,
        password: this.password
      })
        .then(response => {
          this.$router.push({
            name: "dashboard",
            params: { username: "Indra Tobing" }
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
