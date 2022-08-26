import { axiosClassic } from 'src/api/interceptors';
import { API_KEY, getMovieUrl } from 'src/config/api.config';
import { IMovie } from 'src/shared/types';

export const MovieService = {
  async getMovie(searchValue: string) {
    const { data: movie } = await axiosClassic.get<IMovie>(
      getMovieUrl(`${searchValue}&apikey=${API_KEY}`),
    );

    return movie;
  },
};
