<template>
  <div>
    <div class="row">
      <div class="col-2">
        <div
          class="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <router-link
            v-bind:class="[isProfile?'active':'','nav-link']"
            aria-selected="false"
            data-toggle="pill"
            role="tab"
            :to="{name:'user.account.profile'}"
          >Profile</router-link>

          <router-link
            v-bind:class="[isSecurity?'active':'','nav-link']"
            aria-selected="false"
            data-toggle="pill"
            role="tab"
            :to="{name:'user.account.security'}"
          >Security</router-link>
        </div>
      </div>
      <div class="col-10">
        <div class="tab-content" id="v-pills-tabContent">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    isProfile() {
      if (this.$router.history.current.name == "user.account.profile") {
        return true;
      }
      return false;
    },
    isSecurity() {
      if (this.$router.history.current.name == "user.account.security") {
        return true;
      }
      return false;
    }
  }
};
</script>
