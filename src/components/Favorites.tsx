import { FavoriteRepository } from '../libs/model';

interface Props {
  favorites: FavoriteRepository[];
}

const Favorites = ({ favorites }: Props) => {
  return (
    <>
      {!favorites.length ? (
        <>
          <h3>You don't have any favorites.</h3>
          <p>
            Make a search at <a href='/'>/home</a> to add some.
          </p>
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
              <div key={favorite.id}>
                <p>{favorite.name}</p>
              </div>
            );
          })
      )}
    </>
  );
};

export default Favorites;
