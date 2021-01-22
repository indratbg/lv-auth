<template>
  <div>
    <div class="app-title">
      <div>
        <h1><i class="fa fa-wrench"></i> List Products</h1>
        <p>This is List Products page</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'admin.products.list' }"
            >List Products</router-link
          >
        </li>
      </ul>
    </div>
    <div class="card">
      <div class="card-body"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
