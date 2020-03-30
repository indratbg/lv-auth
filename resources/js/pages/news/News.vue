<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <div class="card mt-2" v-for="news in listNews" :key="news.id">
          <div class="card-body">
            <h4 class="card-title">
              <router-link
                :to="{name:'viewnews', params:{post_date:news.post_date,title:news.title}}"
              >{{news.title}}</router-link>
            </h4>
            <p class="text text-info" style="font-size:0.7em">
              <span class="fa fa-clock"></span>
              {{news.created_at}}
            </p>
            <p v-html="news.body"></p>
          </div>
        </div>
        <br />
        <div class="form-group text-center">
          <button class="btn btn-block btn-success" onclick="loadMore()">
            <i class="fa fa-spinner"></i> Load More
          </button>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">News Recently</h5>
            <div class="form-group">
              <input type="search" class="form-control" placeholder="Search" />
            </div>
            <ul class="list-group list-group-flush" v-for="news in listNews" :key="news.id">
              <li class="list-group-item">
                <router-link
                  :to="{ name:'viewnews', params:{post_date:news.post_date,title:news.title}} "
                >{{ news.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ListNews",
  created() {
    this.getNews();
  },
  computed: mapState({
    listNews: state => state.news.listNews
  }),
  methods: {
    ...mapActions("news", ["getNews"])
  }
};
</script>
