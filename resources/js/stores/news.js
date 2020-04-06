import $axios from '../api.js'

const state = () => ({
    listNews: [],
    topTenNews: [],
    detailNews: []
})

const mutations = {
    ASSIGN_DATA(state, payload) {
        state.listNews = payload;
    },
    SET_PAGE(state, payload) {
        state.page = payload
    },
    DETAIL_NEWS(state, payload) {
        state.detailNews = payload.data
    },
    TOP_TEN_NEWS(state, payload) {
        state.topTenNews = payload
    }
}

const actions = {
    getNews({
        commit,
        state
    }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return new Promise((resolve, reject) => {
            $axios.get(`/news?page=${state.page}`)
                .then((response) => {
                    commit('ASSIGN_DATA', response.data)
                    if (response.data && response.data.current_page < response.data.last_page) {
                        commit('SET_PAGE', response.data.current_page + 1)
                    }
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    resolve(response.data)
                })
        })
    },
    detailNews({
        commit,
        state
    }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return new Promise((resolve, reject) => {
            $axios.get(`/news/${payload.post_date}/${payload.title}`)
                .then((response) => {
                    commit('DETAIL_NEWS', response)
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    resolve(response)
                })
        })
    },
    getTopTenNews({
        commit,
        state
    }, payload) {
        return new Promise((resolve, reject) => {
            $axios.get(`/news/topten`)
                .then((response) => {
                    commit('TOP_TEN_NEWS', response.data)
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