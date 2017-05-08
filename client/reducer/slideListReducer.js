import {FETCH_SLIDE_LIST, DELETE_SLIDE} from '../action/index';

const INITIAL_STATE = {slides: []};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_SLIDE_LIST:
            return {...state, slides: action.payload.data};
        case DELETE_SLIDE:
            return {...state, slides: getFilteredSlides(state, action.slideId)};
        default:
            return state;
    }
}

const getFilteredSlides = function(state, slideId){
  let data = state.slides.data, returnData={};
  returnData.data = data.filter(function(item){
    return item !== slideId;
  });
  return returnData;
}
