<template>
  <div>
    <div class="app-title">
      <div>
        <h1>
          <i class="fa fa-wrench"></i> Profile
        </h1>
        <p>This is profile page</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{name:'admin.profile'}">Profile</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {};
</script>
