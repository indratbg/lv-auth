import $axios from '../api.js'

const state = () => ({
    footerRight: [],
    footerCenter: [],
    footerLeft: [],
})

const mutations = {
    FOOTER_RIGHT(state, payload) {
        state.footerRight = payload
    },
    FOOTER_CENTER(state, payload) {
        state.footerCenter = payload
    },
    FOOTER_LEFT(state, payload) {
        state.footerLeft = payload
    },

}

const actions = {

    getFooter({
        state,
        commit
    }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return new Promise((resolve, reject) => {
            $axios.get(`footer/${payload.type}`)
                .then((response) => {
                    if (payload.type == 'right') {
                        commit('FOOTER_RIGHT', response.data)
                    } else if (payload.type == 'center') {
                        commit('FOOTER_CENTER', response.data)
                    } else {
                        commit('FOOTER_LEFT', response.data)
                    }
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
    },
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
