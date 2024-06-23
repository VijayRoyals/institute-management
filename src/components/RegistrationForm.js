import React from 'react';
import { useForm, Controller } from 'react-hook-form';  // Import useForm and Controller
import { Container, Typography, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const RegistrationForm = () => {
  const { handleSubmit, control, formState: { errors }, register, getValues } = useForm();  // Destructure register and getValues

  const onSubmit = (data) => {
    console.log(data); // Replace with logic to store data in database or perform further actions
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Registration
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Student Name"
            fullWidth
            margin="normal"
            {...register('studentName', {
              required: 'Student name is required'
            })}
            error={!!errors.studentName}
            helperText={errors.studentName?.message}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format'
              }
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Date of Birth"
            fullWidth
            margin="normal"
            type="date"
            {...register('dob', {
              required: 'Date of Birth is required'
            })}
            error={!!errors.dob}
            helperText={errors.dob?.message}
          />
          <TextField
            label="Qualification"
            fullWidth
            margin="normal"
            {...register('qualification', {
              required: 'Qualification is required'
            })}
            error={!!errors.qualification}
            helperText={errors.qualification?.message}
          />
          <FormControl fullWidth margin="normal" error={!!errors.gender}>
            <InputLabel>Gender</InputLabel>
            <Controller
              name="gender"
              control={control}
              rules={{ required: 'Gender is required' }}
              render={({ field }) => (
                <Select {...field}>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              )}
            />
            <Box component="span" color="red">{errors.gender?.message}</Box>
          </FormControl>
          <TextField
            label="Contact Number"
            fullWidth
            margin="normal"
            type="tel"
            {...register('contactNumber', {
              required: 'Contact Number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid contact number format'
              }
            })}
            error={!!errors.contactNumber}
            helperText={errors.contactNumber?.message}
          />
          <TextField
            label="Address"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            {...register('address', {
              required: 'Address is required'
            })}
            error={!!errors.address}
            helperText={errors.address?.message}
          />
          <TextField
            label="Create Password"
            fullWidth
            margin="normal"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should have at least 8 characters'
              }
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            label="Confirm Password"
            fullWidth
            margin="normal"
            type="password"
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: value => value === getValues('password') || 'Passwords do not match'
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
