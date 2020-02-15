import Axios from 'axios';

const api = Axios.create({
    baseURL: "http://api.alugarme.techeasy.com.br:3131/"
});

export default api;