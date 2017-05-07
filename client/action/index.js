import axios from 'axios';

export const FETCH_SLIDE_LIST = 'FETCH_SLIDE_LIST';
export const FETCH_SLIDE_DETAILS = 'FETCH_SLIDE_DETAILS';
export const DELETE_LINE = 'DELETE_LINE';
export const ADD_SUB_LINE = 'ADD_SUB_LINE';
export const UPDATE_SLIDE = 'UPDATE_SLIDE';
export const EDIT_LINE = 'EDIT_LINE';

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

export function deleteLine(lineId){
    return {
        type: DELETE_LINE,
        deleteId: lineId
    };
}

export function addSubLine(parentId){
    return {
        type: ADD_SUB_LINE,
        parentId: parentId
    };
}

export function editLine(lineId, content){
  return {
    type: EDIT_LINE,
    lineId: lineId,
    content: content
  }
}

export function saveSlide(slideId, slideData){
  let data = {}, jsonData;
  data[slideId] = slideData;

  const request = axios.put(`${ROOT_URL}/slideData/${slideId}`, data);
  return {
    type: UPDATE_SLIDE,
    payload: request
  }
}
