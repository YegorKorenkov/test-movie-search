import { FC } from 'react';
import { IMovie } from 'src/shared/types';
import MaterialIcon from '../MaterialIcon';

interface IPopup extends IMovie {
  onClosePopup: () => void;
}

const InfoPopup: FC<IPopup> = ({ Title, Year, Director, Actors, Writer, onClosePopup }) => {
  return (
    <div>
      <div className="popup__overlay" onClick={onClosePopup}></div>
      <div className="popup wrapper">
        <h3>{Title}</h3>
        <span>Year: {Year}</span>
        <span>Director: {Director}</span>
        <span>Writer: {Writer}</span>
        <span>Actors: {Actors}</span>
        <MaterialIcon name="MdClose" onClick={() => onClosePopup()} />
      </div>
    </div>
  );
};

export default InfoPopup;
