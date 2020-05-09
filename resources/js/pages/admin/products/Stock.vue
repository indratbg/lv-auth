<template>
  <div>
    <div class="app-title">
      <div>
        <h1>
          <i class="fa fa-bitbucket"></i> Stock
        </h1>
        <p>This is stock page</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{name:'admin.products.stock'}">Stock</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {};
</script>
