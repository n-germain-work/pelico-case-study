//react
import { ChangeEvent } from 'react';

//components
import RepositoryList from './RepositoryList';
import Search from './Search';

//libs
import { FavoriteRepository, Repository } from '../libs/model';

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  repositories: Repository[];
  favorites: FavoriteRepository[];
  handleFavoriteClick: (repository: Repository) => void;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Home = ({ search, setSearch, repositories, favorites, handleSearchChange, handleFavoriteClick }: Props) => {
  return (
    <>
      <Search search={search} setSearch={setSearch} handleSearchChange={handleSearchChange} />
      <RepositoryList
        search={search}
        repositories={repositories}
        favorites={favorites}
        handleFavoriteClick={handleFavoriteClick}
      />
    </>
  );
};

export default Home;
