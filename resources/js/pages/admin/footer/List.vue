<template>
  <div>
    <div class="app-title">
      <div>
        <h1>
          <i class="fa fa-newspaper-o" aria-hidden="true"></i> List of Footer
        </h1>
        <p>This is footer list</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Footer List</a>
        </li>
      </ul>
    </div>

    <div class="tile">
      <div class="mb-2">
        <router-link class="btn btn-primary" :to="{ name: 'admin.footer.add' }"
          >Add Footer</router-link
        >
      </div>
      <div class="tile-body">
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
  data() {
    return {
      columns: [
        {
          title: "Type",
          key: "type",
          align: "left",
          resizable: true,
          sortable: true,
          width: 120,
        },
        {
          title: "Body",
          key: "body",
          align: "left",
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
    ...mapActions("adminfooter", ["getFooters", "deleteFooter"]),
    getData() {
      this.loading = true;
      this.getFooters().then((result) => {
        this.data = Object.keys(result.data).map((key) => result.data[key]);
        this.loading = false;
      });
    },
    handleView(row, index) {
      this.$router.push({
        name: "admin.footer.view",
        params: { id: row.id },
      });
    },
    handleEdit(row, index) {
      this.$router.push({
        name: "admin.footer.edit",
        params: { id: row.id },
      });
    },
    handleDelete(row, index) {
      if (confirm("Are you sure want to delete?") === true) {
        this.deleteFooter({ id: row.id });
        this.getData();
      }
    },
  },
  created: function () {
    this.getData();
  },
};
</script>
