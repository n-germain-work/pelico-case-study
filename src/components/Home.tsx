import { Repository, handleSearchChangeProps } from '../libs/model';
import RepositoryList from './RepositoryList';
import Search from './Search';

interface Props extends handleSearchChangeProps {
  search: string;
  repositories: Repository[];
  handleFavoriteClick: (repository: Repository) => void;
}

const Home = ({ search, handleSearchChange, handleFavoriteClick, repositories }: Props) => {
  return (
    <>
      <Search handleSearchChange={handleSearchChange} />
      <RepositoryList search={search} repositories={repositories} handleFavoriteClick={handleFavoriteClick} />
    </>
  );
};

export default Home;
