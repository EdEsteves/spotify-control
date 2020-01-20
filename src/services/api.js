import axios from 'axios';

const api = axios.create({baseURL: 'https://api.jsonbin.io/b', headers: {'secret-key': '$2b$10$YumTzLQk0ht.50JF6RQZY..FJiZHrIH4AlDOWAOzi0Ovq5b0foDIe'}});

export default api;