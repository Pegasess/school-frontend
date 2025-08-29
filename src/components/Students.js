// src/components/Students.js
import React from 'react';
import { useStudents } from '../contexts/StudentContext';
import {
  Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';

const Students = () => {
  const { students } = useStudents();

  return (
    <div>
      <Typography variant="h5" gutterBottom>Students List</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Admission No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((s) => (
              <TableRow key={s.id}>
                <TableCell>{s.id}</TableCell>
                <TableCell>{s.first_name}</TableCell>
                <TableCell>{s.last_name}</TableCell>
                <TableCell>{s.admission_no}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Students;
