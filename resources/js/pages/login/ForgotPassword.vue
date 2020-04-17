<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Reset Password</div>
          <div class="card-body">
            <form method="POST" @submit.prevent="sendPassword">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    v-model="email"
                    required="required"
                    autocomplete="email"
                    autofocus="autofocus"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">Send Password Reset Link</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: null
    };
  },
  methods: {
    ...mapActions("login", ["sendResetPassword"]),
    sendPassword() {
      this.sendResetPassword({ email: this.email });
    }
  }
};
</script>
