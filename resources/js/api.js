import axios from 'axios';

const $axios = axios.create({
    baseURL: '/api',
    //  headers: {
    //Authorization: localStorage.getItem('token') != 'null' ? 'Bearer ' + localStorage.getItem('token') : '',
    //'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYjlhZmFjYWMzM2NiNDUwYmJkNTc3NjYzYjg1MGYxMTk4OTVlM2M3ZTMzZThhOTk1ZDgzOGUyNTQzYWVlZjc5YTBkOGE1NDQ3NmRjMzk3YmIiLCJpYXQiOjE1ODU3MzE0MTMsIm5iZiI6MTU4NTczMTQxMywiZXhwIjoxNjE3MjY3NDEzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.sv15c9crzNbjK6SjT9ieXwiPzBrqcY1b0gqaFZWCQSSojaNANDu6fgS5ngQD2h84B2R8pJ_9BM-ghU5dhLPdkWkUHQ109DRmENskXNWWe0fyzdhbcq6IN1feXgTuGIo20u8yHwY5XXWsTkQqZ4VLCDj3aYnjnfVmPjcTT-DwtNzTJVuV_VjyEjJXqLPrpKyIv_8JwL9weSzqbh15Otzs3u3YkyXSgkxI9b79B2Vulv0hErrVDOAelfsMpwwSomjTSiQX89smEuIq0HYMUm7Tos_BkmcnSr3Rcy1q24Be-f9tc5tPE182ZlU-H1zU_9lpfVQCqC6q08NofdZAceVVZDHz3-ZEdhHbYEH2CQBp8M37yTbsgD09B6pihgdNTkHMzwFFI-eYdTQ-WvyhN1MuH1AgHXU-Oq0vJ2R71OLYEEXrAY07CwQyXgf131ewOmAuykci4iCdMMBcqMpFlhyOs_ZXxUAsQIJ7rLf9vjVciTpyVyjq4Hwk9XRegbfhITaW36dqy0yYc-z-HFqvV9MTz-oYpWbBvTADkT844XeSbYJJB-DTjsUREJlTsX70BR-kr5UNAGxxbDtylKiJ-Ls57VrpiPL1HMKUWOJmVDBZRe5QAIQXKWBMJI4yKVbaTIDzQkd6S_BSxStYH6C_R7U7MDl3jP9b-g3c0mvr2GAX2ug',
    //   'Content-Type': 'application/json'
    //}
});

export default $axios;
