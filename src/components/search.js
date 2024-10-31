import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const Search = ({ components, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event, newValue) => {
    setQuery(newValue);
    onSearch(newValue);
  };

  return (
    <Autocomplete
      freeSolo
      options={components.filter(component =>
        component.name.toLowerCase().includes(query.toLowerCase())
      )}
      getOptionLabel={(option) => option.name}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Buscar..."
          variant="outlined"
          size="small"
        />
      )}
    />
  );
};

export default Search;
