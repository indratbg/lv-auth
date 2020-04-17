<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Reset Password</div>

            <div class="card-body">
              <form method="POST" @submit.prevent="reset">
                <!-- <input type="hidden" name="token" value="{{ $token }}" /> -->

                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                  <div class="col-md-6">
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      name="email"
                      v-model="email"
                      required
                      autocomplete="email"
                      autofocus
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                  <div class="col-md-6">
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      v-model="password"
                      required
                      autocomplete="new-password"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="password-confirm"
                    class="col-md-4 col-form-label text-md-right"
                  >Confirm Password</label>

                  <div class="col-md-6">
                    <input
                      id="password-confirm"
                      type="password"
                      class="form-control"
                      name="password_confirmation"
                      v-model="password_confirmation"
                      required
                      autocomplete="new-password"
                    />
                  </div>
                </div>

                <div class="form-group row mb-0">
                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">Reset Password</button>
                  </div>
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
import {mapActions} from "vuex";
export default {
  data() {
    return {
      query: this.$router.currentRoute.query,
      email:this.$router.currentRoute.query.email,
      password: null,
      password_confirmation: null
    };
  },
  methods: {
    ...mapActions("login", ["resetPassword"]),
    reset() {
      this.resetPassword({'query':this.query,'password':this.password,'password_confirmation':this.password_confirmation})
      .then(response=>{
          this.$router.push({name:'login'})
      })
    }
  }
};
</script>
