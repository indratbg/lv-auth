import $axios from '../api.js'
const state = () => ({
    products: [],
    page: 1
})

const mutations = {
    SET_PRODUCTS(state, payload) {
        state.products = payload
    },
    SET_PAGE(state, payload) {
        state.page = payload
    }
}

const actions = {

    getProducts({
        state,
        commit
    }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return new Promise((resolve, reject) => {
            $axios.get(`products?page=${state.page}`)
                .then((response) => {
                    commit('SET_PRODUCTS', response.data)
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    resolve(response)
                })
                .catch(error => {
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    reject(error.response)
                })

        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}