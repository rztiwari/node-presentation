import { combineReducers } from 'redux';
import SlideContentReducer from './slideContentReducer';

const rootReducer = combineReducers({
  slideContent: SlideContentReducer
});

export default rootReducer;
