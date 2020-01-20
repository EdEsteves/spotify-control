import axios from 'axios';

const api = axios.create({baseURL: 'https://spotify-control.herokuapp.com'});

export default api;