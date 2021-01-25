<template>
  <div>
    <div class="app-title">
      <div>
        <h1><i class="fa fa-wrench"></i> Add Products</h1>
        <p>This is Add Product page</p>
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
      <div class="card-body">
        <form @submit.prevent="handleSubmit" method="post">
          <div class="form-group">
            <label>Name</label>
            <input type="text" v-model="field.product" class="form-control" />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              type="text"
              v-model="field.price"
              class="form-control col-sm-2"
            />
          </div>
          <div class="form-group">
            <label>Tags</label>
            <input
              type="text"
              v-model="field.tags"
              class="form-control col-sm-2"
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <ckeditor
              :editor="editor"
              v-model="field.desc"
              :config="editorConfig"
            ></ckeditor>
          </div>
          <div class="form-group">
            <button class="btn btn-outline-primary" @click="handleBack">
              Back
            </button>
            <input type="submit" value="Save" class="btn btn-primary" />
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
      field: { product: null, price: null, tags: null, desc: null },
    };
  },
  methods: {
    ...mapActions("adminproduct", ["save"]),
    handleSubmit() {
      this.save(this.field).then((result) => {
        this.$router.push({ name: "admin.product.list" });
      });
    },
    handleBack() {
      this.$router.go(-1);
    },
  },
};
</script>
