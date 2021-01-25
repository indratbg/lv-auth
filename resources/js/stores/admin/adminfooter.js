import $axios from '../../api.js'

const state = () => ({

});
const mutations = {

}

const actions = {
    saveFooter({ state, commit }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return new Promise((resolve, reject) => {
            $axios.post(`admin/footer/store`, payload)
                .then((response) => {

                    commit('SET_LOADING', false, {
                        root: true
                    })
                    resolve(response)
                })
                .catch(error => {
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    if (error.response) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                    reject(error.response)
                })

        })
    },
    async getFooters({ state, commit }) {
        commit('SET_LOADING', true, {
            root: true
        })
        return await new Promise((resolve, reject) => {
            $axios.get('admin/footer/getFooters')
                .then((response) => {
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    resolve(response)
                })
                .catch(error => {
                    if (error.response) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                    reject(error);
                })
        })
    },
    getFooter({ state, commit }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return new Promise((resolve, reject) => {
            $axios.get(`admin/footer/show/${payload.id}`)
                .then((response) => {
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    resolve(response);
                })
                .catch(error => {
                    if (error.response) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                })
        })
    },
    updateFooter({ state, commit }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return new Promise((resolve, reject) => {
            $axios.post(`admin/footer/update/${payload.id}`, payload)
                .then((response) => {
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    resolve(response);
                })
                .catch(error => {
                    if (error.response) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                })
        })
    },
    deleteFooter({ state, commit }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return new Promise((resolve, reject) => {
            $axios.delete(`admin/footer/delete/${payload.id}`)
                .then((response) => {
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    resolve(response);
                })
                .catch(error => {
                    if (error.response) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                })
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}