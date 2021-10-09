import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';/* 
import MenuIcon from '@mui/material/MenuIcon'; */
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCar } from "@fortawesome/free-solid-svg-icons";


export default function MaterialUI() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
<FontAwesomeIcon icon={faCar} />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
