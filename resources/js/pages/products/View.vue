<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-4">
            <img :src="image" class="card-img" />
          </div>
          <div class="col-md-8">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{{ product.product}}</li>
              <li class="list-group-item">{{ product.price }}</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
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
              >Description</a>
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
              >Comments</a>
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
              >Contact</a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >...</div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >...</div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.getProductbyId(this.$route.params.id);
  },
  computed: {
    ...mapState({
      product: state => state.products.detail_products
    }),
    image() {
      return this.product.img_thumbnail;
    }
  },
  methods: {
    ...mapActions("products", ["getProductbyId"])
  }
};
</script>
