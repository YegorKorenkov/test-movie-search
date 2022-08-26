import { createSlice } from '@reduxjs/toolkit';
import { IMovie } from 'src/shared/types';
import { getMovie } from './movie.thunk';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movie: {} as IMovie,
    isLoading: false as boolean,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovie.fulfilled, (state, action) => {
      if (action.payload.Error) {
        state.movie = {} as IMovie;
        state.error = action.payload.Error;
      } else {
        state.error = '';
        state.movie = action.payload;
      }
      state.isLoading = false;
    });

    builder.addCase(getMovie.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getMovie.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Movie not found!';
    });
  },
});

export default movieSlice.reducer;
