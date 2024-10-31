import React, { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import ComponentCard from '../components/Card';
import { Components } from '../assets/Components';
import Search from '../components/search';

const Home = () => {
  const [searchResults, setSearchResults] = useState(Components);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setSearchResults(Components);
    } else {
      const filteredResults = Components.filter(component =>
        component.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  return (
    <Container>
      <Box sx={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 10, 
        backgroundColor: 'white', 
        padding: '10px 0' 
      }}>
        <Search components={Components} onSearch={handleSearch} />
      </Box>
      
      <Grid container spacing={2} justifyContent="center">
        {searchResults.map((component, index) => (
          <Grid item key={component.id} xs={12} sm={6} md={4} lg={3}>
            <ComponentCard
              id={component.id}
              name={component.name}
              description={component.description}
              price={component.price}
              image={component.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
