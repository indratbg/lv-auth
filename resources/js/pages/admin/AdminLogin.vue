<template>
  <div>
    <!--<div class="container" style="margin-top:65px">

      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <div class="card-header text-center">Login Admin</div>
            <div class="card-body">
              <div
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
                v-if="errors.message"
              >
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <strong>{{errors.message}}</strong>
              </div>

              <form method="post" @submit.prevent="login">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    required
                    autocomplete="username"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    autocomplete="current-password"
                    required
                  />
                </div>
                <div class="form-group">
                  <input type="submit" class="btn btn-block btn-primary" value="Login" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <section class="material-half-bg">
      <div class="cover"></div>
    </section>
    <section class="login-content">
      <div class="logo">
        <h1>{{ app_name }}</h1>
      </div>
      <div class="login-box">
        <form class="login-form" @submit.prevent="login">
          <h3 class="login-head">
            <i class="fa fa-lg fa-fw fa-user"></i>SIGN IN
          </h3>
          <div class="form-group">
            <label class="control-label">USERNAME</label>
            <input
              class="form-control"
              type="email"
              placeholder="Email"
              autofocus
              v-model="email"
              autocomplete="username"
            />
          </div>
          <div class="form-group">
            <label class="control-label">PASSWORD</label>
            <input
              class="form-control"
              type="password"
              placeholder="Password"
              v-model="password"
              autocomplete="current-password"
            />
          </div>

          <div class="form-group btn-container">
            <button class="btn btn-primary btn-block">
              <i class="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "indra.tbg@gmail.com",
      password: "secret",
    };
  },
  created() {
    if (this.loggedIn) {
      this.$router.push({ name: "admin.dashboard" });
    }
  },
  computed: {
    ...mapState({
      errors: (state) => state.errors,
      app_name: (state) => state.app_name,
    }),
    ...mapGetters(["loggedIn"]),
  },
  methods: {
    ...mapActions("adminlogin", ["adminLogin"]),
    login() {
      this.adminLogin({ email: this.email, password: this.password }).then(
        (response) => {
          this.$router.push({ name: "admin.dashboard" });
        }
      );
    },
  },
};
</script>
