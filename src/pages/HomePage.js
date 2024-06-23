import React from 'react';
import { Container, Typography, Box } from '@mui/material';


const HomePage = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Our Institute
        </Typography>
        <Typography variant="body1">
          Our institute offers a variety of courses and programs designed to help students achieve their goals.
        </Typography>
        <div><p>This is the institute</p></div>
      </Box>
    </Container>
  );
};

export default HomePage;
