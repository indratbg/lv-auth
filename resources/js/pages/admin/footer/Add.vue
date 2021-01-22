<template>
  <div>
    <div class="app-title">
      <div>
        <h1><i class="fa fa-newspaper-o"></i> Add Footer</h1>
        <p>This is purpose to add footer</p>
      </div>
      <ul class="app-breadcrumb breadcrumb">
        <li class="breadcrumb-item">
          <i class="fa fa-home fa-lg"></i>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Add Footer</a>
        </li>
      </ul>
    </div>
    <div class="tile">
      <div class="tile-title">Add Footer</div>
      <div class="tile-body">
        <form method="post" @submit.prevent="addFooter">
          <div class="form-group">
            <label class="control-label">Type</label>
            <select v-model="field.type" class="form-control col-sm-2">
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
            <label class="control-label">Body</label>
            <ckeditor
              :editor="editor"
              v-model="field.body"
              :config="editorConfig"
            ></ckeditor>
          </div>
          <div class="form-group">
            <button class="btn btn-outline-dark" @click.prevent="back">
              Back
            </button>
            &emsp;
            <input type="submit" value="Save" class="btn btn-primary" />
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
      field: {
        type: null,
        body: "Example of body content",
      },
      typeList: [
        { name: "LEFT", value: "left" },
        { name: "CENTER", value: "center" },
        { name: "RIGHT", value: "right" },
      ],
      selected: true,
    };
  },
  methods: {
    ...mapActions("adminfooter", ["saveFooter"]),
    back() {
      return this.$router.go(-1);
    },
    addFooter() {
      this.saveFooter(this.field).then((response) => {
        this.$router.push({ name: "admin.footer.list" });
      });
    },
  },
};
</script>
