import $axios from '../api.js'

const state = () => ({
    success: '',
    errors: ''
})

const mutations = {
    SUCCESS(state, payload) {
        state.success = payload
    },
    ERROR(
        state,
        payload
    ) {
        state.errors = payload
    }
}

const actions = {
    sendFeedback({
        state,
        commit
    }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return new Promise((resolve, reject) => {
            $axios.post('feedback', payload)
                .then((response) => {
                    commit('SET_SUCCESS', response.data.success, { root: true });
                    commit('ERROR', "")
                    resolve(response.data)
                    commit('SET_LOADING', false, {
                        root: true
                    })
                })
                .catch((error) => {
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    if (error.response) {
                        commit('SET_ERRORS', error.response.data, { root: true });
                    } else if (error.request) {

                        //console.log(error.request);
                    }

                    // console.log(error.config);


                    reject(error)
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
