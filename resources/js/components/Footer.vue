<template>
  <div>
    <div class="clearfix"><hr /></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <div class="card-body">
            <div class="card-text">
              <ul
                class="list-group"
                v-for="(item, index) in leftFooter"
                :key="index"
              >
                <li class="list-group-item" v-html="item.body"></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-body">
            <div class="card-text">
              <ul
                class="list-group"
                v-for="(item, index) in centerFooter"
                :key="index"
              >
                <li class="list-group-item" v-html="item.body"></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-body">
            <div class="card-text">
              <ul
                class="list-group"
                v-for="(item, index) in rightFooter"
                :key="index"
              >
                <li class="list-group-item" v-html="item.body"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      leftFooter: [],
      centerFooter: [],
      rightFooter: [],
    };
  },
  created() {
    this.footerRight();
    this.footerCenter();
    this.footerLeft();
  },
  methods: {
    ...mapActions("footer", ["getFooter"]),
    footerRight() {
      this.getFooter({ type: "right" }).then((responses) => {
        this.rightFooter = responses.data;
      });
    },
    footerCenter() {
      this.getFooter({ type: "center" }).then((responses) => {
        this.centerFooter = responses.data;
      });
    },
    footerLeft() {
      this.getFooter({ type: "left" }).then((responses) => {
        this.leftFooter = responses.data;
      });
    },
  },
};
</script>
