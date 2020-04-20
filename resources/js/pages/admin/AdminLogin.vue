<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card">
            <div class="card-header text-center">Login Admin</div>
            <div class="card-body">
              <form method="post" @submit.prevent="adminLogin">
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    v-model="username"
                    class="form-control"
                    autocomplete="username"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="username">Password</label>
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    adminLogin() {
      console.log("admin login");
    }
  }
};
</script>
