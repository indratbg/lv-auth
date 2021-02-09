import $axios from '../../api.js'

const state = () => ({

});
const mutations = {

}

const actions = {
    save({
        state,
        commit
    }, payload) {
        return new Promise((resolve, reject) => {

            $axios.post('admin/product/store', payload)
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
    async getData({ state, commit }) {
        commit('SET_LOADING', true, {
            root: true
        })
        return await new Promise((resolve, reject) => {
            $axios.get(`admin/product/index`)
                .then((response) => {
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    resolve(response)
                })
                .catch(error => {
                    if (error.response) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                    reject(error);
                })
        })
    },
    show({
        state,
        commit
    }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return new Promise((resolve, reject) => {
            $axios.get(`admin/product/view/${payload.id}`)
                .then((response) => {
                    commit('SET_LOADING', false, {
                        root: true
                    })
                    resolve(response)
                })
                .catch(error => {
                    if (error.response) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                    reject(error);
                })
        })
    },
    update({ state, commit }, payload) {
        return new Promise((resolve, reject) => {
            $axios.post(`admin/product/update/${payload.id}`, payload)
                .then((response) => {
                    commit('SET_SUCCESS', response.data.message, {
                        root: true
                    });
                    resolve(response)
                })
                .catch(error => {
                    if (error.response) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                    reject(error);
                })
        })
    },
    delete({ state, commit }, payload) {
        return new Promise((resolve, reject) => {
            $axios.delete(`admin/product/delete/${payload.id}`)
                .then((response) => {
                    commit('SET_SUCCESS', response.data.message, {
                        root: true
                    });
                    resolve(response)
                })
                .catch(error => {
                    if (error.response) {
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        })
                    }
                    reject(error);
                })
        })
    },
    uploadImages({
        state,
        commit
    }, payload) {
        return new Promise((resolve, reject) => {

            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            $axios.post('admin/images/store', payload, config)
                .then((response) => {


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
    imagesProduct({ state, commit }, payload) {
        return new Promise((resolve, reject) => {

            $axios.get(`admin/images/show/${payload.id_product}`)
                .then((response) => {
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
    deleteImage({ state, commit }, payload) {
        return new Promise((resolve, reject) => {

            $axios.get(`admin/images/delete/${payload}`)
                .then((response) => {
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
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}