<template>
  <div>
    <div class="app-title">
      <div>
        <h1><i class="fa fa-newspaper-o"></i> Add News</h1>
        <p>This is purpose to add news</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Add List</a>
        </li>
      </ul>
    </div>
    <div class="tile">
      <div class="tile-title">Add News</div>
      <div class="tile-body">
        <form method="post" @submit.prevent="addNews">
          <div class="form-group">
            <label class="control-label">Post Date</label>
            <input
              class="form-control col-sm-2"
              type="date"
              placeholder="dd/mm/yyyy"
              v-model="field.post_date"
            />
          </div>
          <div class="form-group">
            <label class="control-label">Title</label>
            <input
              class="form-control"
              type="text"
              placeholder="Title"
              v-model="field.title"
            />
          </div>
          <div class="form-group">
            <label class="control-label">Category</label>
            <input
              class="form-control"
              type="text"
              placeholder="Category"
              v-model="field.category"
            />
          </div>
          <div class="form-group">
            <label class="control-label">Body</label>
            <!-- <textarea rows="10" class="form-control"></textarea> -->
            <ckeditor
              :editor="editor"
              v-model="field.body"
              :config="editorConfig"
            ></ckeditor>
          </div>
          <div class="form-group">
            <button class="btn btn-outline-dark" @click.prevent="back">
              Back
            </button>
            &emsp;
            <input type="submit" value="Save" class="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
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
      field: {
        post_date: this.todayDate(),
        title: "This is title example",
        category: "Article",
        body: "Example of body content",
      },
    };
  },
  methods: {
    ...mapActions("adminnews", ["saveNews"]),
    back() {
      return this.$router.go(-1);
    },
    addNews() {
      this.saveNews(this.field).then((response) => {
        this.$router.push({ name: "admin.news.list" });
      });
    },
    todayDate() {
      let today = new Date();
      return (
        today.getFullYear() +
        "-" +
        String(today.getMonth()).padStart(2, "0") +
        "-" +
        String(today.getDate()).padStart(2, "0")
      );
    },
  },
};
</script>
