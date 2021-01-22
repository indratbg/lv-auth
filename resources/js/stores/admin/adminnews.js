import $axios from '../../api.js'

const state = () => ({
    listNews: []
});
const mutations = {
    SET_NEWS_LIST(state, payload) {
        state.listNews = payload
    }
}

const actions = {
    saveNews({
        state,
        commit
    }, payload) {
        return new Promise((resolve, reject) => {

            $axios.post('admin/news/store', payload)
                .then((response) => {
                    commit('SET_SUCCESS', response.data.message, {
                        root: true
                    });
                    resolve(response)
                })
                .catch(error => {
                    console.log(error)
                    if (error.response) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                    reject(error);
                })
        })
    },
    async getNews({ state, commit }) {
        commit('SET_LOADING', true, {
            root: true
        })
        return await new Promise((resolve, reject) => {
            $axios.get('admin/news/getEditableNews')
                .then((response) => {
                    //console.log(response.data)
                    commit('SET_NEWS_LIST', response.data)
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
    viewDetail({
        state,
        commit
    }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return new Promise((resolve, reject) => {
            $axios.get(`admin/news/view/${payload.post_date}/${payload.title}`)
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
    updateNews({ state, commit }, payload) {
        console.log(payload)
        return new Promise((resolve, reject) => {
            $axios.post(`admin/news/update/${payload.key_post_date}/${payload.key_title}`, payload)
                .then((response) => {
                    commit('SET_SUCCESS', response.data.message, {
                        root: true
                    });
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
    deleteNews({ state, commit }, payload) {
        return new Promise((resolve, reject) => {
            $axios.delete(`admin/news/delete/${payload.post_date}/${payload.title}`, payload)
                .then((response) => {
                    commit('SET_SUCCESS', response.data.message, {
                        root: true
                    });
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
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
