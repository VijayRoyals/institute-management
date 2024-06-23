import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = ({ setLoginStatus }) => {
  const [userType, setUserType] = useState('');
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/login', credentials);
      if (response.data.success) {
        setLoginStatus({ isLoggedIn: true, userType });
        navigate(`/${userType}`);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Login
      </Typography>
      <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
        <TextField
          label="User Name"
          name="username"
          fullWidth
          margin="normal"
          onChange={handleChange}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          onChange={handleChange}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel>User Type</InputLabel>
          <Select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            label="User Type"
          >
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="trainer">Trainer</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Button component={Link} to="/register" fullWidth sx={{ mt: 2 }} variant="outlined">
          I am a new user
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
