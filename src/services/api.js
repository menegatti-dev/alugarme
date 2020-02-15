import Axios from 'axios';

const api = Axios.create({
    baseURL: "http://alugar.me:3131/"
});

export default api;