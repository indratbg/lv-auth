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
            <label for="">Images</label>

            <div class="row">
              <div
                class="col-sm-3"
                v-for="(image, index) in images"
                :key="image.id"
              >
                <img
                  :src="'/storage/' + image.category + '/' + image.filename"
                  class="img-thumbnail"
                  width="100%"
                />
                <a class="topright text-danger" @click="deleteImg(image.id)"
                  ><i class="fa fa-2x fa-times" aria-hidden="true"></i
                ></a>
              </div>
              <div class="col-sm-3">
                <i
                  class="fa fa-2x fa-plus text-primary"
                  style="cursor: pointer"
                  aria-hidden="true"
                  @click="$refs.addImage.click()"
                >
                  Add Image</i
                >
                <input
                  type="file"
                  accept="image/*"
                  style="display: none"
                  ref="addImage"
                  v-on:change="addImage"
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
<style scoped>
.topright {
  position: absolute;
  top: 8px;
  right: 20px;
  font-size: 18px;
}
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
    ...mapActions("adminproduct", [
      "show",
      "update",
      "imagesProduct",
      "deleteImage",
      "uploadImages",
    ]),
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
    getImages() {
      this.imagesProduct({ id_product: this.id }).then((result) => {
        this.images = result.data;
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
    deleteImg(id) {
      this.deleteImage(id).then((result) => {
        this.getImages();
      });
    },
    addImage(e) {
      const file = e.target.files[0];
      if (file) {
        //insert images
        let formData = new FormData();
        formData.append("id_product", this.id);
        formData.append("images[0]", file);
        this.uploadImages(formData).then((result) => {
          this.getImages();
        });
      }
    },
  },
};
</script>
