import axios from 'axios';
// import store from './store.js'

const $axios = axios.create({
    baseURL: '/api',
    headers: {
        // Authorization: localStorage.getItem('token') != 'null' ? 'Bearer ' + localStorage.getItem('token'):'',
        'Content-Type': 'application/json'
    }
});

export default $axios;
