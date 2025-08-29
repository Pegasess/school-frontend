// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/students">
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem button component={Link} to="/add-student">
          <ListItemText primary="Add Student" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
