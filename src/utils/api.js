// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Your API base URL
  headers: {
    'Content-Type': 'application/json'
  }
});

export const loginUser = (credentials) => api.post('/login', credentials);
export const registerUser = (data) => api.post('/register', data);
export const getStudents = () => api.get('/students');
export const getTrainers = () => api.get('/trainers');
export const getAdmins = () => api.get('/admins');
export const addStudent = (data) => api.post('/students', data);
export const addTrainer = (data) => api.post('/trainers', data);
export const addAdmin = (data) => api.post('/admins', data);
export const updateStudent = (id, data) => api.put(`/students/${id}`, data);
export const updateTrainer = (id, data) => api.put(`/trainers/${id}`, data);
export const updateAdmin = (id, data) => api.put(`/admins/${id}`, data);
export const deleteStudent = (id) => api.delete(`/students/${id}`);
export const deleteTrainer = (id) => api.delete(`/trainers/${id}`);
export const deleteAdmin = (id) => api.delete(`/admins/${id}`);
