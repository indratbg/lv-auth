<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="card text-left">
          <div class="card-header">
            Filter
            <span class="fa fa-filter"></span>
          </div>
          <div class="card-body">
            <h4 class="card-title">Category</h4>
            <p class="card-text">Body</p>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "products"
};
</script>
