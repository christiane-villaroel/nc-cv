import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { commentsReducer } from '../features/comments/CommentSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';
import { campsitesReducer } from '../features/campsites/campsitesSlice';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat([logger])
});

console.log(store.getState());
