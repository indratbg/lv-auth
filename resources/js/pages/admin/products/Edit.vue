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
            <label>Name</label>
            <input type="text" v-model="product" class="form-control" />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="text" v-model="price" class="form-control" />
          </div>
          <div class="form-group">
            <label>Tags</label>
            <input type="text" v-model="tags" class="form-control col-sm-2" />
          </div>
          <div class="form-group">
            <label>Description</label>

            <ckeditor
              :editor="editor"
              v-model="desc"
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
      id: this.$route.params.id,
      product: null,
      price: null,
      tags: null,
      desc: null,
      created_at: null,
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    ...mapActions("adminproduct", ["show", "update"]),
    handleBack() {
      this.$router.push({ name: "admin.product.list" });
    },
    getDetail() {
      this.show({
        id: this.id,
      }).then((result) => {
        this.product = result.data.product;
        this.price = result.data.price;
        this.tags = result.data.tags;
        this.desc = result.data.desc;
        this.created_at = result.data.created_at;
      });
    },
    handleUpdate() {
      this.update({
        id: this.id,
        product: this.product,
        price: this.price,
        tags: this.tags,
        desc: this.desc,
      }).then((response) => {
        this.$router.push({ name: "admin.product.list" });
      });
    },
  },
};
</script>
