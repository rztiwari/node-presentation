import { combineReducers } from 'redux';
import SlideContentReducer from './slideContentReducer';
import SlideListReducer from './SlideListReducer';

const rootReducer = combineReducers({
  slideContent: SlideContentReducer,
  slideList: SlideListReducer
});

export default rootReducer;
