<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h1>Contact Us</h1>
        <form method="POST" @submit.prevent="send">
          <div class="form-group row">
            <label for="inputNane" class="col-md-2 col-form-label">Name</label>
            <div class="col-md-5">
              <input
                type="text"
               class="form-control"
                id="inputName"
                placeholder="Name"
                v-model="name"
              />

            </div>
          </div>
          <div class="form-group row">
            <label for="subject" class="col-md-2 col-form-label">Subject</label>
            <div class="col-md-5">
              <input
                type="text"
                class="form-control"
                id="subject"
                placeholder="Subject"
                autocomplete="off"
                v-model="subject"
              />

            </div>
          </div>
          <div class="form-group row">
            <label for="email" class="col-md-2 col-form-label">Email</label>
            <div class="col-md-5">
              <input
                type="email"
               class="form-control"
                id="email"
                placeholder="Email"
                autocomplete="off"
                v-model="email"
              />

            </div>
          </div>
          <div class="form-group row">
            <label for="body" class="col-md-2 col-form-label">Message</label>
            <div class="col-md-5">
              <textarea
                id="body"
                rows="3"
               class="form-control"
                v-model="body"
              ></textarea>

            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-10">
              <input type="submit" class="btn btn-primary" value="Send" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "Indra Tobing",
      email: "indra.tbg@gmail.com",
      subject: "Testing Feedback",
      body: "Ini adalah body feedback"
    };
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
