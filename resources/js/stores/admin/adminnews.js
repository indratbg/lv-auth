import $axios from '../../api.js'

const state = () => ({

});
const mutations = {

}

const actions = {
    saveNews({
        state,
        commit
    }, payload) {
        return new Promise((resolve, reject) => {

            $axios.post('admin/news/store', payload)
                .then((response) => {

                    commit('SET_SUCCESS', response.data.message, {
                        root: true
                    });
                    resolve(response)
                })
                .catch(error => {
                    console.log(error)
                    if (error.response) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                    reject(error);
                })
        })
    },
    async getNews() {
        return await new Promise((resolve, reject) => {
            //$axios.get()
        })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}