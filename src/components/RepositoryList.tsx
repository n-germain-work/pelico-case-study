//material
import { Chip, Paper, Typography, Link } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Divider from '@mui/material/Divider';

//libs
import { FavoriteRepository, Repository } from '../libs/model';
import { toDate } from '../libs/helpers';

//csqs
import './RepositoryList.css';

interface Props {
  search: string;
  repositories: Repository[];
  favorites: FavoriteRepository[];
  handleFavoriteClick: (repository: Repository) => void;
}

const RepositoryList = ({ search, repositories, favorites, handleFavoriteClick }: Props) => {
  const isFavorite = (repository: Repository) => {
    const favoriteIds = favorites.map((favorite) => favorite.id);
    return favoriteIds.includes(repository.id);
  };

  return (
    <div className='list'>
      {!search ? (
        <Typography variant='body1'>Start typing to search for Github repositories</Typography>
      ) : (
        repositories
          .sort(function (a, b) {
            const repositoryA = a.name;
            const repositoryB = b.name;
            return repositoryA < repositoryB ? -1 : repositoryA > repositoryB ? 1 : 0;
          })
          .map((repository) => {
            return (
              <Paper className='paper' elevation={3} key={repository.id}>
                <header className={isFavorite(repository) ? 'favored' : ''}>
                  <div className='left-header'>
                    <Typography variant='body1' m={1}>
                      {repository.name}
                    </Typography>
                    <Chip size='small' label={repository.language || 'N/A'} />
                  </div>
                  {isFavorite(repository) ? (
                    <StarIcon
                      color='primary'
                      sx={{ cursor: 'pointer', marginRight: '8px' }}
                      onClick={() => handleFavoriteClick(repository)}
                    />
                  ) : (
                    <StarOutlineIcon
                      sx={{ cursor: 'pointer', marginRight: '8px' }}
                      onClick={() => handleFavoriteClick(repository)}
                    />
                  )}
                </header>
                <Divider />
                <article>
                  <Typography variant='body2' gutterBottom>
                    <strong>Owner :</strong> {repository.owner.login} <br />
                    <strong>Creation :</strong> {toDate(repository.created_at)} <br />
                    <strong>Last modified :</strong> {toDate(repository.updated_at)} <br />
                  </Typography>
                  <Typography variant='overline' lineHeight={0}>
                    {repository.description || 'No description provided'}
                  </Typography>
                  <Link href={repository.html_url} target='_blank' display={'block'} mt={1}>
                    {repository.html_url}
                  </Link>
                </article>
              </Paper>
            );
          })
      )}
    </div>
  );
};

export default RepositoryList;
