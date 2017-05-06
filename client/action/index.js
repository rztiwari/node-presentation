import axios from 'axios';
export const FETCH_SLIDE_LIST = 'FETCH_SLIDE_LIST';

const ROOT_URL = 'http://127.0.0.1:3000/presentation';

export function fetchSlideList(){
    const request = axios.get(`${ROOT_URL}/slideList`);

    return {
        type: FETCH_SLIDE_LIST,
        payload: request
    };
}
