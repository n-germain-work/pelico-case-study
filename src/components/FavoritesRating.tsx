//material
import Rating from '@mui/material/Rating';

//libs
import { FavoriteRepository } from '../libs/model';

interface Props {
  favorite: FavoriteRepository;
  handleFavoriteRating(favoriteId: number, rating: number | null): void;
}

const FavoritesRating = ({ favorite, handleFavoriteRating }: Props) => {
  console.log('favorite', favorite);

  return (
    <Rating
      sx={{ margin: '8px' }}
      value={favorite.notation}
      onChange={(_event, newValue) => {
        handleFavoriteRating(favorite.id, newValue);
      }}
    />
  );
};

export default FavoritesRating;
