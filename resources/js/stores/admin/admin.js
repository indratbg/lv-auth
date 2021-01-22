import $axios from '../../api.js'

const state = () => ({
    auth: []
})

const mutations = {
    SET_AUTH_USER(state, payload) {
        state.auth = payload
    }
}

const actions = {
    getAdminDetail({
        state,
        commit
    }) {
        return new Promise((resolve, reject) => {
            $axios.defaults.headers.common["Authorization"] =
                "Bearer " + localStorage.getItem("token");
            $axios.get('admin/user')
                .then((response) => {
                    commit('SET_AUTH_USER', response.data)
                    resolve(response);
                })
                .catch((error) => {
                    if (error.response.status == 403) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                    reject(error);
                })
        });

    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
