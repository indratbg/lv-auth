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
                    commit('SUCCESS', response.data.success);
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

                        if (error.response.status == '422') {
                            commit('ERROR', error.response.data.errors);
                        }

                    } else if (error.request) {

                        //console.log(error.request);
                    }

                    // console.log(error.config);

                    commit('SUCCESS', "");
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