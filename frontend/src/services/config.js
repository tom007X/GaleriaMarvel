import axios from 'axios';
import md5 from 'md5';

const publicApiKey = import.meta.env.VITE_APP_MARVEL_PUBLIC_KEY;
const privateApiKey = import.meta.env.VITE_APP_MARVEL_PRIVATE_KEY;


const ts = Date.now().toString();
const hash = md5(ts + privateApiKey + publicApiKey);

//Instancia de axios configurada para la API de Marvel
const api = axios.create({baseURL: 'https://gateway.marvel.com/v1/public',
    params: {
        apikey: publicApiKey,
        ts: ts,
        hash: hash
    }
});

export {api};