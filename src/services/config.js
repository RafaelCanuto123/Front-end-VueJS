import axios from 'axios';

export const http = axios.create({
    baseURL : 'https://dev-front-end-teste.sinersoft.com.br/',
});