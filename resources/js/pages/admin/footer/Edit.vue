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
            <label class="control-label">Type</label>
            <select v-model="type" class="form-control col-sm-2">
              <option
                v-for="type in typeList"
                :value="type.value"
                :key="type.name"
              >
                {{ type.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Content</label>

            <ckeditor
              :editor="editor"
              v-model="body"
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
      created_at: null,
      typeList: [
        { name: "LEFT", value: "left" },
        { name: "CENTER", value: "center" },
        { name: "RIGHT", value: "right" },
      ],
      selected: true,
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    ...mapActions("adminfooter", ["getFooter", "updateFooter"]),
    handleBack() {
      this.$router.push({ name: "admin.footer.list" });
    },
    getDetail() {
      this.getFooter({
        id: this.id,
      }).then((result) => {
        this.type = result.data.type;
        this.body = result.data.body;
      });
    },
    handleUpdate() {
      this.updateFooter({
        id: this.id,
        type: this.type,
        body: this.body,
      }).then((response) => {
        this.$router.push({ name: "admin.footer.list" });
      });
    },
  },
};
</script>
