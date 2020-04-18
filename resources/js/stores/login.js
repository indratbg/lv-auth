import $axios from "../api.js";


const state = () => ({});

const mutations = {};

const actions = {
    async userRegister({
        state,
        commit
    }, payload) {

        commit('SET_LOADING', true, {
            root: true
        })
        return await new Promise((resolve, reject) => {
            $axios
                .post(`/register`, payload)
                .then(response => {
                    commit("SET_SUCCESS", response.data.message, {
                        root: true
                    });
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    resolve(response);
                })
                .catch(error => {

                    if (error.response) {
                        commit("SET_ERRORS", error.response.data, {
                            root: true
                        });
                    }
                    commit('SET_LOADING', false, {
                        root: true
                    })
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
    async sendResetPassword({
        state,
        commit
    }, payload) {
        commit('SET_LOADING', true, {
            root: true
        });
        return await new Promise((resolve, reject) => {
            $axios.post('password/email', payload)
                .then((response) => {
                    commit('SET_SUCCESS', response.data.message, {
                        root: true
                    });
                    commit('SET_LOADING', false, {
                        root: true
                    });
                    resolve(response);
                })
                .catch(error => {
                    if (error.response.data.message) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        });
                    } else {
                        commit('SET_ERRORS', {
                            'message': error.response.data.error
                        }, {
                            root: true
                        });
                    }
                    commit('SET_LOADING', false, {
                        root: true
                    });

                })

        });
    },
    resetPassword({
        state,
        commit
    }, payload) {
        commit('SET_LOADING', true, {
            root: true
        });
        return new Promise((resolve, reject) => {
            $axios.post(`password/reset?token=${payload.query.token}&email=${payload.query.email}`, {
                    'password': payload.password,
                    'password_confirmation': payload.password_confirmation
                })
                .then((response) => {

                    commit('SET_SUCCESS', response.data.message, {
                        root: true
                    })
                    resolve(response)
                })
                .catch(error => {
                    if (error.response.data) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        });
                    }
                    reject(error);
                })
            commit('SET_LOADING', false, {
                root: true
            });
        })
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations
};
