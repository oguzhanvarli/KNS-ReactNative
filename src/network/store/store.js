import {configureStore} from '@reduxjs/toolkit';
import cardReducer from './features/cardSlice';
export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
  //used middleware for fetch state.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});
