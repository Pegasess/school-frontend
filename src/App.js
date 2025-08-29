// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import LandingPage from './components/LandingPage';

/**
 * Layout wrapper to apply sidebar and header
 * Only used for internal (non-landing) pages
 */
const PageLayout = ({ children }) => (
  <Box sx={{ display: 'flex' }}>
    <Sidebar />
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Box sx={{ p: 3 }}>{children}</Box>
    </Box>
  </Box>
);

/**
 * Handles which layout to render based on route
 */
const AppRoutes = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route
        path="/students"
        element={<PageLayout><Students /></PageLayout>}
      />
      <Route
        path="/add-student"
        element={<PageLayout><AddStudent /></PageLayout>}
      />

      {/* 404 Page */}
      <Route
        path="*"
        element={<PageLayout><h1>404 - Page Not Found</h1></PageLayout>}
      />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
