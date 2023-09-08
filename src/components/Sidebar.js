import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';
import "./Sidebar.css"

const Sidebar = ({ open, onToggleSidebar }) => {
  const toggleDrawer = () => {
    onToggleSidebar();
  };

  return (
    <div>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <div className="sidebar">
          <div className="sidebar-logo">
            <span>User Dashboard</span>
          </div>
          <List>
            <Link to="/users" className="sidebar-link" onClick={toggleDrawer}>
              <ListItemButton>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
            </Link>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Sidebar;
