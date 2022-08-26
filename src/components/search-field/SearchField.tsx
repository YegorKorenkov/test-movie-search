import { ChangeEvent, FC, FormEvent, useCallback, useState } from 'react';

import MaterialIcon from '../MaterialIcon';

interface ISearchField {
  onSubmitSearch: (e: FormEvent<HTMLFormElement>, serchTerm: string) => void;
}

const SearchField: FC<ISearchField> = ({ onSubmitSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);
  return (
    <form className="search" onSubmit={(e) => onSubmitSearch(e, searchTerm)}>
      <input placeholder="Search" value={searchTerm} onChange={handleSearch} />
      <MaterialIcon name="MdSearch" />
    </form>
  );
};

export default SearchField;
