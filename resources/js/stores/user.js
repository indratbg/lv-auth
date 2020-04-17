import $axios from '../api.js'
// $axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
const state = () => ({
    auth: []
})

const mutations = {
    SET_AUTH_USER(state, payload) {
        state.auth = payload
    }
}

const actions = {

    getUserDetail({
        state,
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            $axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            $axios.get('user')
                .then((response) => {
                    commit('SET_AUTH_USER', response.data)
                    resolve(response)
                })
                .catch(error => {
                    if (error.response.status == 403) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                    // console.log(error.response.data)
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