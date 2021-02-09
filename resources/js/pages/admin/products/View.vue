<template>
  <div>
    <div class="app-title">
      <div>
        <h1>
          <i class="fa fa-newspaper-o"></i> View
          {{ this.$route.params.product }}
        </h1>
        <p>This is purpose to view detail product</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'admin.product.list' }"
            >List Product</router-link
          >
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="tile">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            v-model="product"
            class="form-control col-sm-2"
            disabled
          />
        </div>
        <div class="form-group">
          <label>Price</label>
          <input type="text" v-model="price" class="form-control" disabled />
        </div>
        <div class="form-group">
          <label>Tags</label>
          <input type="text" v-model="tags" class="form-control" disabled />
        </div>
        <div class="form-group">
          <label for="">Images</label>
          <div class="row">
            <div class="col-sm-3" v-for="image in images" :key="image.id">
              <img
                :src="'/storage/' + image.category + '/' + image.filename"
                class="img-thumbnail"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Description</label>

          <ckeditor
            :editor="editor"
            v-model="desc"
            :config="editorConfig"
            disabled
          ></ckeditor>
        </div>

        <div class="form-group">
          <label>Created Date</label>
          <input
            type="text"
            v-model="created_at"
            class="form-control"
            disabled
          />
        </div>
        <div class="form-group">
          <button @click="handleBack" class="btn btn-outline-primary">
            Back
          </button>
          <button @click="handleEdit" class="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  height: 150px;
  width: 100%;
}
</style>
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
      images: [],
    };
  },
  created() {
    this.getDetail();
    this.getImages();
  },
  methods: {
    ...mapActions("adminproduct", ["show", "imagesProduct"]),
    handleBack() {
      this.$router.go(-1);
    },
    getDetail() {
      this.show({ id: this.id }).then((result) => {
        this.product = result.data.product;
        this.price = result.data.price;
        this.tags = result.data.tags;
        this.desc = result.data.desc;
        this.created_at = result.data.created_at;
      });
    },
    getImages() {
      this.imagesProduct({ id_product: this.id }).then((result) => {
        this.images = result.data;
        console.log(this.images);
      });
    },
    handleEdit() {
      this.$router.push({
        name: "admin.product.edit",
        params: { id: this.id },
      });
    },
  },
};
</script>
