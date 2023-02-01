import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="h3" align="center" sx={{flexGrow: 1}}>
          Mortgage Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
