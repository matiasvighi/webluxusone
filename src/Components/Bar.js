import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Routes, Route, Link } from "react-router-dom";
import Casamientos from './Casamientos';










export default function Bar() {

 const [botonlogeo, setbotonlogeo] = React.useState(); 
 const handleClick = (event,newValue) => {setbotonlogeo(newValue) ;
  console.log("tu hermana entagada")
  console.log(botonlogeo,"carlos")}
  
  
  
  
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        
        <Toolbar >
          <Routes>
          <Box  sx={{ mr: 2, display: "flex", justifyContent:"start" }}>
           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            <MenuIcon />
           </IconButton>
           <Button color="inherit"
           Route path="/Casamiento" element={<Casamiento />}>Casamientos</Button>
           <Button color="inherit">Eventos</Button>
           <Button color="inherit">Deportes</Button>
           <Button color="inherit">Modelos</Button>
           <Button color="inherit">OtrasCosas</Button>
          </Box>
          <Box sx={{ justifySelf:"end" }}>
          <Button color="inherit">Login</Button>
          </Box>
          </Routes>

        </Toolbar>
      </AppBar>
    </Box>
  );

  function Casamiento() {
    return(
      <>
      <Casamientos></Casamientos>
      <Link to="/Casamiento"></Link>
      </>
      )
  }
}