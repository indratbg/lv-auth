import $axios from "../api.js";


const state = () => ({});

const mutations = {};

const actions = {
    userRegister({
        state,
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            $axios
                .post(`/register`, payload)
                .then(response => {
                    commit(
                        "SET_ERRORS", {
                            errors: [],
                            message: null
                        }, {
                            root: true
                        }
                    );
                    commit("SET_SUCCESS", response.data, {
                        root: true
                    });
                    resolve(response);
                })
                .catch(error => {

                    if (error.response) {
                        commit("SET_ERRORS", error.response.data, {
                            root: true
                        });
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        //console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("Error" + error.response);
                    }

                    reject(error);
                });
        });
    },
    userLogin({
        state,
        commit
    }, payload) {
        commit("SET_LOADING", true, {
            root: true
        });

        return new Promise((resolve, reject) => {
            $axios
                .post(`/login`, payload)
                .then(response => {
                    if (response.status == 200) {
                        localStorage.setItem(
                            "token",
                            response.data.access_token
                        );
                        commit("SET_TOKEN", response.data.access_token, {
                            root: true
                        });
                    }
                    commit("SET_LOADING", false, {
                        root: true
                    });
                    resolve(response);
                })
                .catch(errors => {

                    commit("SET_ERRORS", errors.response.data, {
                        root: true
                    });
                    commit("SET_LOADING", false, {
                        root: true
                    });

                });
        });
    },

    userLogout(context) {
        if (context.rootGetters.loggedIn) {
            $axios.defaults.headers.common["Authorization"] =
                "Bearer " + localStorage.getItem("token");
            return new Promise((resolve, reject) => {
                localStorage.removeItem("token");

                context.commit("SET_TOKEN", null, {
                    root: true
                });

                $axios
                    .post("/logout")
                    .then(response => {
                        resolve(response.data);
                    })
                    .catch(error => {
                        //console.log(error.config);
                        reject(error);
                    });
            });
        }
    },
    sendResetPassword({
        state,
        commit
    }, payload) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            console.log(payload)
            $axios.post('password/email', payload)
                .then((response) => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error.response)
                })
            commit('SET_LOADING', false, { root: true });
        });
    },
    resetPassword({ state, commit }, payload) {
        commit('SET_LOADING', true, { root: true });
        return new Promise((resolve, reject) => {
            $axios.post(`password/reset?token=${payload.query.token}&email=${payload.query.email}`, { 'password': payload.password, 'password_confirmation': payload.password_confirmation })
                .then((response) => {

                    commit('SET_SUCCESS', response.message, { root: true })
                    resolve(response)
                })
                .catch(error => {
                    if (error.response.data) {
                        commit('SET_ERRORS', error.response.data, { root: true });
                    }
                    reject(error);
                })
            commit('SET_LOADING', false, { root: true });
        })
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations
};