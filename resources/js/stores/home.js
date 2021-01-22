import $axios from '../api.js'

const state = () => ({
    top_four: [],
})

const mutations = {
    TOP_FOUR(state, payload) {
        state.top_four = payload
    },

}

const actions = {

    getTopFour({
        state,
        commit
    }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return new Promise((resolve, reject) => {
            $axios.get(`topFour`)
                .then((response) => {

                    commit('TOP_FOUR', response.data)
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