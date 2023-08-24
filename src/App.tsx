//react
import { ChangeEvent, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//components
import Home from './components/Home';
import Favorites from './components/Favorites';

//utils
import { searchRepositories } from './utils/githubAPI';
import { debounce } from 'lodash';

//libs
import { Repository, FavoriteRepository } from './libs/model';

//css
import './App.css';

function App() {
  const [search, setSearch] = useState<string>('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [favorites, setFavorites] = useState<FavoriteRepository[]>([]);

  const getRepositories = debounce(async (query: string) => {
    const _repositories = await searchRepositories(query);
    setRepositories(_repositories);
  }, 2000);

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    const _search = e.target.value;
    setSearch(_search);
    getRepositories(_search);
  }

  function handleFavoriteClick(repository: Repository) {
    const favoriteIds = favorites.map((repository) => repository.id);
    const _favorites = favoriteIds.includes(repository.id)
      ? favorites.filter((r) => r.id !== repository.id)
      : [...favorites, { ...repository, notation: 0 }];
    console.log(_favorites);
    setFavorites(_favorites);
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Favorites'>Favorites</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path='/'
            element={
              <Home
                search={search}
                repositories={repositories}
                handleSearchChange={handleSearchChange}
                handleFavoriteClick={handleFavoriteClick}
              />
            }
          />
          <Route path='/Favorites' element={<Favorites favorites={favorites} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
