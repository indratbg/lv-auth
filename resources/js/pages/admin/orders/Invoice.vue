<template>
  <div>
    <div class="app-title">
      <div>
        <h1>
          <i class="fas fa fa-file-text-o"></i> Invoice
        </h1>
        <p>This is invoice page</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{name:'admin.orders.invoice'}">Invoice List</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
