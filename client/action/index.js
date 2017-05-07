import axios from 'axios';
export const FETCH_SLIDE_LIST = 'FETCH_SLIDE_LIST';
export const FETCH_SLIDE_DETAILS = 'FETCH_SLIDE_DETAILS';

const ROOT_URL = 'http://127.0.0.1:3000/presentation';

export function fetchSlideList(){
    const request = axios.get(`${ROOT_URL}/slideList`);

    return {
        type: FETCH_SLIDE_LIST,
        payload: request
    };
}

export function fetchSlideDetails(slideId){
    const request = axios.get(`${ROOT_URL}/slideData/${slideId}`);

    return {
        type: FETCH_SLIDE_DETAILS,
        payload: request
    };
}
