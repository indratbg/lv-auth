<template>
  <div>
    <h1>Contact Us</h1>
    <form>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
        </div>
      </div>
      <div class="form-group row">
        <label for="subject" class="col-sm-2 col-form-label">Subject</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="subject"
            placeholder="Subject"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Contact mounted");
  }
};
</script>
