import axios from 'axios';

export const contactSend = axios.create({
    baseURL: 'https://webhook.site/2ce49fcb-a1f2-4c00-9fa3-21fa509d627e'
});

export const getData = axios.create({
    baseURL: 'https://accenture-server-rn.herokuapp.com/'
});