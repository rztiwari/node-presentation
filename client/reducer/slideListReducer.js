import {FETCH_SLIDE_LIST} from '../action/index';

const INITIAL_STATE = {slides: []};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_SLIDE_LIST:
            return {...state, slides: action.payload.data};
        default:
            return state;
    }
}
