import { combineReducers } from 'redux';
import contactReducer from './contact';
import reviewsReducer from './reviews';
import splashReducer from './splash';
import videosReducer from './videos';

export const rootReducer = combineReducers({
  contact: contactReducer,
  reviews: reviewsReducer,
  splash: splashReducer,
  videos: videosReducer
});
