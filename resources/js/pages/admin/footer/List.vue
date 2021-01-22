<template>
    <div>
    <div class="app-title">
      <div>
        <h1><i class="fa fa-sticky-note" aria-hidden="true"></i> List of Footer</h1>
        <p>This is footer list</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Footer List</a>
        </li>
      </ul>
    </div>

    <div class="tile">
      <div class="mb-2">
        <router-link class="btn btn-primary" :to="{ name: 'admin.footer.add' }"
          >Add Footer</router-link
        >
      </div>
      <div class="tile-body">

      </div>
    </div>
  </div>
</template>
