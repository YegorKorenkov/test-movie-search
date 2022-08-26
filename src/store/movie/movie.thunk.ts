import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieService } from 'src/services/movie.service';

export const getMovie = createAsyncThunk('movie/getMovie', async (searchTerm: string) => {
  return await MovieService.getMovie(searchTerm);
});
