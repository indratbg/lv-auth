<template>
  <div>
    <div class="tile">
      <h3 class="tile-title">{{ title }}</h3>
      <small>
        <i class="fa fa-clock"></i>
        {{ detail.updated_at}}
      </small>
      <div class="tile-body">
        <span v-html="detail.body"></span>
        <div class="form-group">
          <button class="btn btn-outline-secondary" @click="$router.go(-1)">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ViewNews",
  data() {
    return {
      post_date: "" || this.$route.params.post_date,
      title: "" || this.$route.params.title
    };
  },
  computed: mapState({
    detail: state => state.news.detailNews
  }),
  created() {
    this.detailNews({ post_date: this.post_date, title: this.title });
  },
  methods: {
    ...mapActions("news", ["detailNews"])
  }
};
</script>
