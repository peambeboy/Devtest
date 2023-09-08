import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ onToggleSidebar, sidebarOpen }) => {
  const toggleSidebar = () => {
    onToggleSidebar();
  };

  return (
    <AppBar position="static" style={{ background: "#333" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          User Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
