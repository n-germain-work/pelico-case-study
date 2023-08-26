//components
import FavoritesRating from './FavoritesRating';

//material
import { Button, Chip, Divider, Link, Paper, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

//libs
import { FavoriteRepository } from '../libs/model';
import { toDate } from '../libs/helpers';

//css
import './RepositoryList.css';

interface Props {
  favorites: FavoriteRepository[];
  setFavorites: React.Dispatch<React.SetStateAction<FavoriteRepository[]>>;
}

const Favorites = ({ favorites, setFavorites }: Props) => {
  function handleFavoriteRating(favoriteId: number, rating: number | null) {
    const _favorites = favorites.map((favorite) =>
      favorite.id === favoriteId ? { ...favorite, notation: rating } : { ...favorite }
    );
    return setFavorites(_favorites);
  }

  function handleFavoriteDelete(favoriteId: number) {
    const _favorites = favorites.filter((favorite) => favorite.id !== favoriteId);
    return setFavorites(_favorites);
  }

  return (
    <div className='list'>
      {!favorites.length ? (
        <>
          <div>
            <Typography variant='h6' mb={1}>
              You don't have any favorites.
            </Typography>
            <Typography variant='body2'>
              Make a search at <Link href='/'>/home</Link> to add some.
            </Typography>
          </div>
        </>
      ) : (
        favorites
          .sort(function (a, b) {
            const favoriteA = a.name;
            const favoriteB = b.name;
            return favoriteA < favoriteB ? -1 : favoriteA > favoriteB ? 1 : 0;
          })
          .map((favorite) => {
            return (
              <Paper className='paper' elevation={3} key={favorite.id}>
                <div>
                  <header>
                    <div className='left-header'>
                      <Typography variant='body1' m={1}>
                        {favorite.name}
                      </Typography>
                      <Chip size='small' label={favorite.language || 'N/A'} />
                    </div>
                    <FavoritesRating favorite={favorite} handleFavoriteRating={handleFavoriteRating} />
                  </header>
                  <Divider />
                  <article>
                    <Typography variant='body2' gutterBottom>
                      <strong>Owner :</strong> {favorite.owner.login} <br />
                      <strong>Creation :</strong> {toDate(favorite.created_at)} <br />
                      <strong>Last modified :</strong> {toDate(favorite.updated_at)} <br />
                    </Typography>
                    <Typography variant='overline' lineHeight={0}>
                      {favorite.description || 'No description provided'}
                    </Typography>
                    <Link href={favorite.html_url} target='_blank' display={'block'} mt={1}>
                      {favorite.html_url}
                    </Link>
                    <Divider />
                    <footer>
                      <Button
                        variant='contained'
                        color='inherit'
                        sx={{ margin: '8px' }}
                        startIcon={<DeleteForeverIcon />}
                        onClick={() => handleFavoriteDelete(favorite.id)}
                      >
                        Delete
                      </Button>
                    </footer>
                  </article>
                </div>
              </Paper>
            );
          })
      )}
    </div>
  );
};

export default Favorites;
