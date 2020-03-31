<template>
  <div>
    <h1>Contact Us</h1>
    <form method="POST" @submit.prevent="send">
      <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="success">
        <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>-->
        <strong>{{success}}</strong>
      </div>

      <div class="form-group row">
        <label for="inputNane" class="col-md-2 col-form-label">Name</label>
        <div class="col-md-5">
          <input
            type="text"
            v-bind:class="[errors.name?'is-invalid':'','form-control']"
            id="inputName"
            placeholder="Name"
            v-model="name"
          />
          <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="subject" class="col-md-2 col-form-label">Subject</label>
        <div class="col-md-5">
          <input
            type="text"
            v-bind:class="[errors.subject?'is-invalid':'','form-control']"
            id="subject"
            placeholder="Subject"
            autocomplete="off"
            v-model="subject"
          />
          <div class="invalid-feedback" v-if="errors.subject">{{errors.subject[0]}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-md-2 col-form-label">Email</label>
        <div class="col-md-5">
          <input
            type="email"
            v-bind:class="[errors.email?'is-invalid':'','form-control']"
            id="email"
            placeholder="Email"
            autocomplete="off"
            v-model="email"
          />
          <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
        </div>
      </div>
      <div class="form-group row">
        <label for="body" class="col-md-2 col-form-label">Message</label>
        <div class="col-md-5">
          <textarea
            id="body"
            rows="3"
            v-bind:class="[errors.body?'is-invalid':'','form-control']"
            v-model="body"
          ></textarea>
          <div class="invalid-feedback" v-if="errors.body">{{errors.body[0]}}</div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-md-10">
          <input type="submit" class="btn btn-primary" value="Send" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      name: "Indra Tobing",
      email: "indra.tbg@gmail.com",
      subject: "Testing Feedback",
      body: "Ini adalah body feedback"
    };
  },
  computed: {
    ...mapState({
      errors: state => state.contact.errors,
      success: state => state.contact.success
    })
  },
  methods: {
    ...mapActions("contact", ["sendFeedback"]),
    send() {
      this.sendFeedback({
        name: this.name,
        email: this.email,
        subject: this.subject,
        body: this.body
      });
    }
  }
};
</script>
