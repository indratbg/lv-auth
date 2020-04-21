<template>
  <div>
    <div class="app-title">
      <div>
        <h1>
          <i class="fa fa-newspaper-o"></i> List of News
        </h1>
        <p>This is news list</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <a href="#">News List</a>
        </li>
      </ul>
    </div>

    <div class="tile">
      <div class="mb-2">
        <router-link class="btn btn-primary" :to="{name:'admin.news.add'}">Add News</router-link>
      </div>

      <h3 class="tile-title">Card Title</h3>
      <div
        class="tile-body"
      >Hey there, I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.</div>
      <div class="tile-footer">
        <a class="btn btn-primary" href="#">Link</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
