import { FC, useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import InfoPopup from './components/info-popup/InfoPopup';
import MaterialIcon from './components/MaterialIcon';
import SearchField from './components/search-field/SearchField';
import { useAppDispatch } from './hooks/useAppDispatch';
import { selectError, selectIsLoading, selectMovie } from './store/movie/movie.selector';
import { getMovie } from './store/movie/movie.thunk';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const movie = useSelector(selectMovie);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const onGetSearchedMovie = (e: FormEvent<HTMLFormElement>, searchTerm: string) => {
    e.preventDefault();
    dispatch(getMovie(searchTerm));
  };

  if (isLoading)
    <div className="loader">
      <div className="loader__element" />
    </div>;

  return (
    <div className="wrapper">
      <SearchField onSubmitSearch={onGetSearchedMovie} />
      {error && <p>{error}</p>}
      {Object.keys(movie).length ? (
        <>
          <div className="movie">
            <div className="movie__info">
              <h3 className="movie__title">{movie.Title}</h3>
              <span className="movie__year">{movie.Year}</span>
              <MaterialIcon name="MdOutlineInfo" onClick={() => setIsOpenPopup(true)} />
            </div>
            <img src={movie.Poster} alt="Poster not found" />
          </div>
          {isOpenPopup && <InfoPopup {...movie} onClosePopup={() => setIsOpenPopup(false)} />}
        </>
      ) : null}
    </div>
  );
};

export default App;
