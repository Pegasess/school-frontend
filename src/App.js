// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Students from './components/Students';
import AddStudent from './components/AddStudent';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <Header />
          <Box sx={{ p: 3 }}>
            <Routes>
              <Route path="/students" element={<Students />} />
              <Route path="/add-student" element={<AddStudent />} />
              <Route path="*" element={<h1>Welcome to the School Admin Dashboard</h1>} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
