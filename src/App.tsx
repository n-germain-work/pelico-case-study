//react
import { ChangeEvent, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

//components
import Home from './components/Home';
import Favorites from './components/Favorites';

//material
import { Button, Stack } from '@mui/material';

//utils
import { searchRepositories } from './utils/githubAPI';
import { debounce } from 'lodash';

//libs
import { Repository, FavoriteRepository } from './libs/model';

//css
import './App.css';
import WebFont from 'webfontloader';
WebFont.load({ google: { families: ['Roboto:300,400,500'] } });

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
      : [...favorites, { ...repository, notation: null }];
    setFavorites(_favorites);
  }

  return (
    <Router>
      <nav>
        <Stack spacing={1} direction='row'>
          <Button variant='contained' color='inherit' size='large'>
            <Link to='/'>Home</Link>
          </Button>
          <Button variant='contained' color='inherit' size='large'>
            <Link to='/Favorites'>Favorites</Link>
          </Button>
        </Stack>
      </nav>

      <main>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                search={search}
                setSearch={setSearch}
                repositories={repositories}
                favorites={favorites}
                handleSearchChange={handleSearchChange}
                handleFavoriteClick={handleFavoriteClick}
              />
            }
          />
          <Route path='/Favorites' element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
