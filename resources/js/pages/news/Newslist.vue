<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <div class="tile mt-2" v-for="news in listNews" :key="news.id">
          <h4 class="tile-title">
            <router-link
              :to="{
                                    name: 'news.view',
                                    params: {
                                        post_date: news.post_date,
                                        title: news.title
                                    }
                                }"
            >{{ news.title }}</router-link>
          </h4>
          <div class="tile-body">
            <p class="text text-info" style="font-size:0.7em">
              <span class="fa fa-clock"></span>
              {{ news.created_at }}
            </p>
            <p v-html="news.body.substr(0, 200)"></p>
          </div>
        </div>
        <br />
        <div class="form-group text-center" v-if="currentPage != lastPage">
          <button
            class="btn btn-block btn-success"
            v-on:click="loadMore()"
            :disabled="currentPage == lastPage"
          >
            <i class="fa fa-spinner"></i>
            Load More
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
            <ul class="list-group list-group-flush" v-for="news in topTenNews" :key="news.id">
              <li class="list-group-item">
                <router-link
                  :to="{
                                        name: 'news.view',
                                        params: {
                                            post_date: news.post_date,
                                            title: news.title
                                        }
                                    }"
                >{{ news.title }}</router-link>
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
    this.getTopTenNews();
  },
  computed: mapState({
    listNews: state => state.news.listNews.data,
    currentPage: state => state.news.listNews.current_page,
    lastPage: state => state.news.listNews.last_page,
    topTenNews: state => state.news.topTenNews
  }),
  methods: {
    ...mapActions("news", ["getNews", "getTopTenNews"]),
    loadMore() {
      this.getNews();
    }
  }
};
</script>
