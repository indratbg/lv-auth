<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div
            class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-3"
            v-for="product in products.data"
            :key="product.id"
          >
            <div class="card-deck">
              <div class="card">
                <img class="card-img-top rounded" src="https://placekitten.com/300/250" alt />
                <div class="pl-2 pt-2">
                  <router-link
                    :to="{name:'products.view',params:{'id':product.id} }"
                    class="btn-link"
                  >
                    <b>{{ product.product}}</b>
                  </router-link>
                  <br />
                  <b class="text text-danger">Rp.{{ formatNumber(product.price) }}</b>
                  <form action method="post">
                    <div class="input-group m-2">
                      <input
                        type="text"
                        class="form-control col-7"
                        aria-describedby="inputGroupPrepend3"
                        required
                      />
                      <div class="input-group-prepend">
                        <button
                          class="input-group-text text-white bg-danger"
                          id="inputGroupPrepend3"
                        >
                          <i class="fa fa-cart-plus"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">Page {{currentPage}} of {{lastPage}}</div>
          <div class="col-md-6">
            <!-- Pagination -->
            <nav aria-label="Page navigation" v-if="products.total>0">
              <ul class="pagination justify-content-end">
                <li :class="[currentPage==1?'disabled':'','page-item']">
                  <button
                    class="page-link"
                    aria-label="Previous"
                    @click.prevent="prevPage"
                    :disabled="currentPage==1"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                <li class="page-item" v-for="item in pagination" :key="item">
                  <button class="page-link" @click.prevent="changePage(item)">{{item}}</button>
                </li>
                <li :class="[currentPage==lastPage?'disabled':'','page-item']">
                  <button
                    class="page-link"
                    aria-label="Next"
                    @click.prevent="nextPage"
                    :disabled="currentPage==lastPage"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
            <!-- End Pagination -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ProductsList",
  created() {
    this.getProducts();
  },
  computed: {
    ...mapState({
      products: state => state.products.products,
      currentPage: state => state.products.products.current_page,
      lastPage: state => state.products.products.last_page,
      perPage: state => state.products.products.per_page
    }),
    pagination() {
      let a = [];
      for (let x = this.currentPage + 1; x <= this.lastPage; x++) {
        a.push(x);
      }
      return a.slice(0, 6);
    }
  },
  methods: {
    ...mapActions("products", ["getProducts"]),
    prevPage() {
      this.$store.commit("products/SET_PAGE", this.currentPage - 1);
      this.getProducts();
    },
    nextPage() {
      this.$store.commit("products/SET_PAGE", this.currentPage + 1);
      this.getProducts();
    },
    changePage(page) {
      this.$store.commit("products/SET_PAGE", page);
      this.getProducts();
    },
    formatNumber: function(price) {
      return parseFloat(price).toLocaleString(
        window.document.documentElement.lang
      );
    }
  }
};
</script>
