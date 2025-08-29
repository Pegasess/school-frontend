import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const LandingHeader = ({ onLoginSelect }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAccountClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (role) => {
    setAnchorEl(null);
    if (role && onLoginSelect) {
      onLoginSelect(role); // Send role to parent (LandingPage)
    }
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          📚 School Management System
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">About</Button>
        </Box>

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="account"
          onClick={handleAccountClick}
        >
          <AccountCircle />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleClose()}
        >
          <MenuItem onClick={() => handleClose('Admin')}>Login as Admin</MenuItem>
          <MenuItem onClick={() => handleClose('Teacher')}>Login as Teacher</MenuItem>
          <MenuItem onClick={() => handleClose('Student')}>Login as Student</MenuItem>
          <MenuItem onClick={() => handleClose('Parent')}>Login as Parent</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default LandingHeader;
