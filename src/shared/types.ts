import * as MaterialIcons from 'react-icons/md';

export interface IMovie {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
  Director: string;
  Writer: string;
  Actors: string;
  Error: string;
}

export type TypeMaterialIconName = keyof typeof MaterialIcons;
