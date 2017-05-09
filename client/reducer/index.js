import { combineReducers } from 'redux';
import SlideContentReducer from './slideContentReducer';
import SlideListReducer from './slideListReducer';

const rootReducer = combineReducers({
  slideContent: SlideContentReducer,
  slideList: SlideListReducer
});

export default rootReducer;
