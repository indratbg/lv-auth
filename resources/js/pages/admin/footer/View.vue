<template>
  <div>
    <div class="app-title">
      <div>
        <h1>
          <i class="fa fa-newspaper-o"></i> View {{ this.$route.params.id }}
        </h1>
        <p>This is purpose to view detail footer</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'admin.footer.list' }"
            >List Footer</router-link
          >
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="tile">
        <div class="form-group">
          <label>Type</label>
          <input
            type="text"
            v-model="type"
            class="form-control col-sm-2"
            disabled
          />
        </div>

        <div class="form-group">
          <label>Content</label>

          <ckeditor
            :editor="editor"
            v-model="body"
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
      type: null,
      body: null,
      created_by: null,
      created_at: null,
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    ...mapActions("adminfooter", ["getFooter"]),
    handleBack() {
      this.$router.go(-1);
    },
    getDetail() {
      this.getFooter({ id: this.id }).then((result) => {
        this.id = result.data.id;
        this.type = result.data.type;
        this.body = result.data.body;
        this.created_at = result.data.created_at;
      });
    },
    handleEdit() {
      this.$router.push({
        name: "admin.footer.edit",
        params: { id: this.id },
      });
    },
  },
};
</script>
