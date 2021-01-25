<template>
  <div>
    <div class="app-title">
      <div>
        <h1><i class="fa fa-wrench"></i> List Products</h1>
        <p>This is List Products page</p>
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
        <div class="form-group">
          <router-link
            :to="{ name: 'admin.product.add' }"
            class="btn btn-primary"
            ><i class="fa fa-plus" aria-hidden="true"></i> Add
            Product</router-link
          >
        </div>
        <BeeGridTable stripe :columns="columns" :data="data" :loading="loading">
          <template slot-scope="{ row, index }" slot="op">
            <Button
              type="info"
              size="small"
              style="margin-right: 5px"
              @click="handleView(row, index)"
              ><i class="fa fa-eye" aria-hidden="true"></i
            ></Button>
            <Button
              type="warning"
              size="small"
              style="margin-right: 5px"
              @click="handleEdit(row, index)"
              ><i class="fa fa-pencil" aria-hidden="true"></i
            ></Button>
            <Button type="error" size="small" @click="handleDelete(row, index)"
              ><i class="fa fa-trash" aria-hidden="true"></i
            ></Button>
          </template>
        </BeeGridTable>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  mounted() {},
  data() {
    return {
      columns: [
        {
          title: "Product",
          key: "product",
          align: "left",
          resizable: true,
          sortable: true,
        },
        {
          title: "Price",
          key: "price",
          align: "right",
          width: 150,
        },
        {
          title: "Tags",
          key: "tags",
          align: "left",
          resizable: true,
          sortable: true,
        },
        {
          title: "Created At",
          key: "created_at",
          align: "left",
          resizable: true,
          sortable: true,
        },
        {
          title: "Operation",
          slot: "op",
          headSlot: "hop",
          key: "op",
          width: 150,
          hideFilter: true,
          align: "left",
        },
      ],
      data: [],
      loading: false,
    };
  },
  methods: {
    ...mapActions("adminproduct", ["getData", "delete"]),
    getProducts() {
      this.loading = true;
      this.getData().then((result) => {
        this.data = Object.keys(result.data).map((key) => result.data[key]);
        this.loading = false;
      });
    },
    handleView(row, index) {
      this.$router.push({
        name: "admin.product.view",
        params: { id: row.id },
      });
    },
    handleEdit(row, index) {
      this.$router.push({
        name: "admin.product.edit",
        params: { id: row.id },
      });
    },
    handleDelete(row, index) {
      if (confirm("Are you sure want to delete?") === true) {
        this.delete({ id: row.id });
        this.getProducts();
      }
    },
  },
  created: function () {
    this.getProducts();
  },
};
</script>

