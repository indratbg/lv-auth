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
        return new Promise((resolve, reject) => {
            $axios.post('feedback', payload)
                .then((response) => {
                    commit('SUCCESS', response.data.success);
                    commit('ERROR', "")
                    resolve(response.data)
                })
                .catch((error) => {

                    if (error.response.status == '422') {
                        commit('ERROR', error.response.data.errors)
                    }
                    commit('SUCCESS', "");
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
