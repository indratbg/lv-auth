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
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
