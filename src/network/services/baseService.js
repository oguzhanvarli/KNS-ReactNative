import axios from 'axios';
import {API_URL} from '../env/config';

let headers = {
    'X-RapidAPI-Key': 'f7834c1856msh0b0b02cd760c6a8p1e8a10jsncf09035148a0',
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
}

export const baseService = {
    get: async (url) => {
        let response = await axios.get(API_URL+url,{headers}).then(res => res.data)
        return response;
    }
};

