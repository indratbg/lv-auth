import $axios from '../../api.js'

const state = () => ({

});
const mutations = {

}

const actions = {
    async adminLogin({
        state,
        commit
    }, payload) {
        commit('SET_LOADING', true, {
            root: true
        })
        return await new Promise((resolve, reject) => {
            $axios.post('admin/adminlogin', payload)
                .then((response) => {

                    if (response.data.access_token) {
                        localStorage.setItem('token', response.data.access_token)
                        commit('SET_TOKEN', response.data.access_token, {
                            root: true
                        })
                    }

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
                        commit('SET_ERRORS', error.response.data, {
                            root: true
                        });
                    }
                    reject(error)
                })
        })
    },
    getAdminDetail({
        state,
        commit
    }) {
        return new Promise((resolve, reject) => {
            $axios.defaults.headers.common["Authorization"] =
                "Bearer " + localStorage.getItem("token");
            $axios.get('admin/user')
                .then((response) => {
                    console.log(response);
                    resolve(response);
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                })
        });

    },
    adminLogout({
        state,
        commit
    }) {
        return new Promise((resolve, reject) => {
            $axios.defaults.headers.common["Authorization"] =
                "Bearer " + localStorage.getItem("token");
            $axios.post('admin/adminlogout')
                .then((response) => {
                    localStorage.removeItem('token')
                    commit("SET_TOKEN", null, {
                        root: true
                    });

                    resolve(response)
                })
                .catch(error => {
                    localStorage.removeItem('token')
                    commit("SET_TOKEN", null, {
                        root: true
                    });
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