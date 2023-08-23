import { handleSearchChangeProps } from '../libs/model';

const Search = ({ handleSearchChange }: handleSearchChangeProps) => {
  return (
    <>
      <input onChange={handleSearchChange} placeholder='Search Github repositories'></input>
    </>
  );
};

export default Search;
