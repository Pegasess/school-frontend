// src/components/AddStudent.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';
import { useStudents } from '../contexts/StudentContext';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [form, setForm] = useState({ first_name: '', last_name: '', admission_no: '' });
  const { addStudent } = useStudents();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(form);
    navigate('/students'); // Go back to students page
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>Add Student</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="First Name" name="first_name" value={form.first_name} onChange={handleChange} required />
        <TextField label="Last Name" name="last_name" value={form.last_name} onChange={handleChange} required />
        <TextField label="Admission No" name="admission_no" value={form.admission_no} onChange={handleChange} required />
        <Button type="submit" variant="contained">Add</Button>
      </Box>
    </Paper>
  );
};

export default AddStudent;
