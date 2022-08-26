import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movie/movie.slice';

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export type AppDispatchType = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
