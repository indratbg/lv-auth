<template>
  <div>
    <div class="app-title">
      <div>
        <h1><i class="fa fa-newspaper-o"></i> List of News</h1>
        <p>This is purpose to view list news</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <a href="#">List News</a>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <div class="form-group">
            <router-link
              :to="{ name: 'admin.news.add' }"
              class="btn btn-primary"
              ><i class="fa fa-plus" aria-hidden="true"></i> Add
              News</router-link
            >
          </div>
          <BeeGridTable
            stripe
            :columns="columns"
            :data="data"
            :loading="loading"
          >
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
              <Button
                type="error"
                size="small"
                @click="handleDelete(row, index)"
                ><i class="fa fa-trash" aria-hidden="true"></i
              ></Button>
            </template>
          </BeeGridTable>
        </div>
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
          title: "Post Date",
          key: "post_date",
          align: "left",
          resizable: true,
          sortable: true,
          type: "date", //date field
          width: 120,
        },
        {
          title: "Title",
          key: "title",
          align: "left",
          sortable: true,
          width: 360,
        },
        {
          title: "Category",
          key: "category",
          align: "left",
          resizable: true,
          sortable: true,
          width: 100,
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
    ...mapActions("adminnews", ["getNews", "deleteNews"]),
    getPosts() {
      this.loading = true;
      this.getNews().then((result) => {
        this.data = Object.keys(result.data).map((key) => result.data[key]);
        this.loading = false;
      });
    },
    handleView(row, index) {
      this.$router.push({
        name: "admin.news.view",
        params: { post_date: row.post_date, title: row.title },
      });
    },
    handleEdit(row, index) {
      this.$router.push({
        name: "admin.news.edit",
        params: { post_date: row.post_date, title: row.title },
      });
    },
    handleDelete(row, index) {
      if (confirm("Are you sure want to delete?") === true) {
        this.deleteNews({ post_date: row.post_date, title: row.title });
        this.getPosts();
      }
    },
  },
  created: function () {
    this.getPosts();
  },
};
</script>
