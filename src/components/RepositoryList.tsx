import { Repository } from '../libs/model';

interface Props {
  search: string;
  repositories: Repository[];
  handleFavoriteClick: (repository: Repository) => void;
}

const RepositoryList = ({ search, repositories, handleFavoriteClick }: Props) => {
  return (
    <>
      {!search
        ? 'Start typing to search for Github repositories'
        : repositories
            .sort(function (a, b) {
              const repositoryA = a.name;
              const repositoryB = b.name;
              return repositoryA < repositoryB ? -1 : repositoryA > repositoryB ? 1 : 0;
            })
            .map((repository) => {
              return (
                <div key={repository.id}>
                  <p>{repository.name}</p>
                  <button onClick={() => handleFavoriteClick(repository)}>'fav'</button>
                </div>
              );
            })}
    </>
  );
};

export default RepositoryList;
