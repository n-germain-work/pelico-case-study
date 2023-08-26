//react
import { ChangeEvent } from 'react';

//material
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ClearIcon from '@mui/icons-material/Clear';

//css
import './Search.css';

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ search, setSearch, handleSearchChange }: Props) => {
  function handleClearSearch() {
    return setSearch('');
  }
  return (
    <div className='search'>
      <TextField
        variant='outlined'
        fullWidth
        value={search}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <GitHubIcon />
            </InputAdornment>
          ),
          endAdornment: search ? (
            <InputAdornment position='end'>
              <ClearIcon className='pointer' onClick={handleClearSearch} />
            </InputAdornment>
          ) : null,
        }}
        onChange={handleSearchChange}
        placeholder='Search Github repositories'
      ></TextField>
    </div>
  );
};

export default Search;
