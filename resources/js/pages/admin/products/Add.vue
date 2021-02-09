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
              v-on:change="formatNumber"
              style="text-align: right"
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
          .
          <div class="form-group">
            <label for="">Images</label>
            <div class="row">
              <div
                class="col-sm-3"
                v-for="(image, index) in imageUrl"
                :key="index"
              >
                <div class="m-2">
                  <img :src="image" class="img-thumbnail" height="100px" />
                </div>
              </div>
              <div class="col-sm-3">
                <span
                  class="btnAddImage"
                  @click="$refs.addImage.click()"
                  style="cursor: pointer"
                >
                  <i class="fa fa-2x fa-plus" aria-hidden="true"></i>
                  Add Image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  ref="addImage"
                  style="display: none"
                  v-on:change="imageSelected"
                />
              </div>
            </div>
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
<style scoped>
img {
  height: 150px;
  width: 100%;
}
.btnAddImage {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { mapActions } from "vuex";
import numeral from "numeral";
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
      field: { product: null, price: 0, tags: null, desc: null, images: [] },
      images: [],
      imageUrl: [],
    };
  },
  methods: {
    ...mapActions("adminproduct", ["save", "uploadImages"]),
    handleSubmit() {
      this.field.price = this.field.price.replace(/,/g, "");
      this.save(this.field).then((result) => {
        //insert images
        let formData = new FormData();
        formData.append("id_product", result.data.id);
        $.each(this.images, function (index, image) {
          formData.append("images[" + index + "]", image);
        });

        this.uploadImages(formData);

        this.$router.push({ name: "admin.product.list" });
      });
    },
    handleBack() {
      this.$router.go(-1);
    },
    imageSelected(e) {
      const file = e.target.files[0];
      if (file.size / 1024 > 2048) {
        alert("Max size of file : 2 Mb");
      } else {
        if (file) {
          this.imageUrl.push(URL.createObjectURL(file));
          this.images.push(file);
        }
      }
    },
    formatNumber() {
      this.field.price = numeral(this.field.price).format("0,0");
    },
  },
};
</script>
