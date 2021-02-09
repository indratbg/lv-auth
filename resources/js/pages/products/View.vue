<template>
  <div>
    <div class="card">
      <div class="card-body">
        <!-- component -->
        <viewer :options="options" :images="images">
          <img
            v-for="src in images"
            :src="src"
            :key="src"
            class="image img-responsive"
          />
        </viewer>

        <div class="mt-4">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                >Description</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                >Comments</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
                >Contact</a
              >
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <p v-html="product.desc"></p>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.image {
  height: 100px;
  cursor: pointer;
  margin: 5px;
  display: inline-block;
}
</style>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      id_product: this.$route.params.id,
      //images: [],
      images: [],
      options: {
        inline: false,
        button: true,
        navbar: true,
        title: true,
        toolbar: true,
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
        transition: true,
        fullscreen: true,
        keyboard: true,
      },
    };
  },
  created() {
    this.getProductbyId(this.$route.params.id);
    this.getImage();
  },
  computed: {
    ...mapState({
      product: (state) => state.products.detail_products,
    }),
    image() {
      return this.product.img_thumbnail;
    },
  },
  methods: {
    ...mapActions("products", ["getProductbyId", "getImagesbyProduct"]),
    getImage() {
      this.getImagesbyProduct(this.id_product).then((result) => {
        let image = [];
        $.each(result.data, function (index, item) {
          image.push("/storage/" + item.category + "/" + item.filename);
        });
        this.images = image;
      });
    },
  },
};
</script>
