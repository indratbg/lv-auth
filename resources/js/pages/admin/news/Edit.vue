<template>
  <div>
    <div class="app-title">
      <div>
        <h1>
          <i class="fa fa-newspaper-o"></i> Update
          {{ this.$route.params.title }}
        </h1>
        <p>This is purpose to update detail news</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'admin.news.list' }">List News</router-link>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="tile">
        <form method="post" @submit.prevent="handleUpdate">
          <div class="form-group">
            <label>Post Date</label>
            <input
              type="date"
              v-model="post_date"
              class="form-control col-sm-2"
            />
          </div>
          <div class="form-group">
            <label>Title</label>
            <input type="text" v-model="title" class="form-control" />
          </div>
          <div class="form-group">
            <label>Category</label>
            <input type="text" v-model="category" class="form-control" />
          </div>
          <div class="form-group">
            <label>Content</label>

            <ckeditor
              :editor="editor"
              v-model="body"
              :config="editorConfig"
            ></ckeditor>
          </div>

          <div class="form-group">
            <button @click="handleBack" class="btn btn-outline-primary">
              Back
            </button>
            <input type="submit" value="Update" class="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        //   plugins:[],
        toolbar: {
          //  items:['heading']
        },
        language: "id",
        // The configuration of the editor.
      },
      key_post_date: this.$route.params.post_date,
      key_title: this.$route.params.title,
      post_date: null,
      title: null,
      category: null,
      body: null,
      created_by: null,
      created_at: null,
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    ...mapActions("adminnews", ["viewDetail", "updateNews"]),
    handleBack() {
      this.$router.push({ name: "admin.news.list" });
    },
    getDetail() {
      this.viewDetail({
        post_date: this.key_post_date,
        title: this.key_title,
      }).then((result) => {
        this.post_date = result.data.post_date;
        this.title = result.data.title;
        this.body = result.data.body;
        this.category = result.data.category;
        this.created_by = result.data.created_by;
        this.created_at = result.data.created_at;
      });
    },
    handleUpdate() {
      this.updateNews({
        key_post_date: this.key_post_date,
        key_title: this.key_title,
        post_date: this.post_date,
        title: this.title,
        category: this.category,
        body: this.body,
      }).then((response) => {
        this.$router.push({ name: "admin.news.list" });
      });
    },
  },
};
</script>
