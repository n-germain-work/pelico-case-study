import { ChangeEvent, useState } from 'react';
import './App.css';
import { searchRepositories } from './utils/githubAPI';
import { Favorite, Repository } from './libs/model';

function App() {
  const [search, setSearch] = useState<string>('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [favorites, setFavorites] = useState<Favorite>({});

  const getRepositories = (search: string) => searchRepositories(search).then((response) => setRepositories(response));

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const _search = e.target.value;
    setSearch(_search);
    getRepositories(_search);
  }

  function handleFavoriteClick(repositoryId: number) {
    if (favorites[repositoryId] === undefined) {
      setFavorites({ ...favorites, [repositoryId]: null });
    } else {
      setFavorites({...favorites, [repositoryId]: undefined});
    }
  }

  return (
    <>
      <input onChange={handleInputChange}></input>
      <p>{search}</p>
      {repositories.map((repository) => {
        return (
          <div key={repository.id}>
            <p>{repository.name}</p>
            <button onClick={() => handleFavoriteClick(repository.id)}>'fav'</button>
          </div>
        );
      })}
      <p>{JSON.stringify(favorites)}</p>
    </>
  );
}

export default App;
