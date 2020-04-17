<template>
<div class="container">
    <div class="card">
        <div class="card-body">
            <form @submit.prevent="sendPassword" method="post">
                <div class="form-group">
                    <div class="row">
                        <label for="email" class="col-md-1">Email</label>
                        <div class="col-md-4">
                            <input
                                type="email"
                                class="form-control"
                                v-model="email"
                                required
                            />
                        </div>
                        <div class="col-md-4">
                            <input
                                title="Reset Password"
                                type="submit"
                                class="btn btn-danger"
                                value="Reset Password"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: null,
            errors: []
        };
    },
    methods: {
        sendPassword() {
            if (this.email == null) {
                this.errors = { email: "Email is required" };
            } else {
                console.log("send request password" + this.email);
            }
        }
    }
};
</script>
