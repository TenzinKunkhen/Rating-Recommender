import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: {
        Authorization: 'Client-ID 5ea2ebc7fdf47f11a122485b65cbd0fa'
    },

});