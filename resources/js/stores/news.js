import $axios from '../api.js'

const state = () => ({
    listNews: [],
    page: 1,
    detailNews: []
})

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.listNews = payload.data;
    },
    SET_PAGE(state, payload) {
        state.page = payload
    },
    DETAIL_NEWS(state, payload) {
        state.detailNews = payload.data
    }
}

const actions = {
    getNews({
        commit,
        state
    }, payload) {
        return new Promise((resolve, reject) => {
            $axios.get(`/news?page=${state.page}`)
                .then((response) => {
                    commit('ASSIGN_DATA', response.data)
                    resolve(response.data)
                })
        })
    },
    detailNews({
        commit,
        state
    }, payload) {
        return new Promise((resolve, reject) => {
            $axios.get(`/news/${payload.post_date}/${payload.title}`)
                .then((response) => {
                    commit('DETAIL_NEWS', response)
                    resolve(response)
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
