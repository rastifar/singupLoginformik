import React, { useState } from "react";
//Hoc
import WithRendering from "./components/withRendering";
//styles
import styles from './App.module.css'
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const App = ({ name, logout }) => {
 
  return (
    <>
      <AppBar>
        <Toolbar>
          
          <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
          سلام {name} عزیز
          </Typography>
          <Button onClick={logout} color="inherit" variant="outlined">خروج</Button>
          <IconButton  sx={{ mr: 2 }} color="inherit" >
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      
    </>
  );
};

export default WithRendering(App);
