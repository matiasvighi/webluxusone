import { AppBar, Box, Button, IconButton, Toolbar,MenuItem,Menu } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
//import MenuD from "./MenuD";


import React from 'react';







function MenuA() {
    let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log("apreto menú");
       
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
  
  
   
    

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar >
                    <Box sx={{ mr: 2, display: "flex", justifyContent: "start" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            aria-controls="simple-menu" 
                            aria-haspopup="true" 
                            onClick={handleClick}
                        >

                                
                  
                            <MenuIcon />
                        </IconButton>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={anchorEl}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
                                    <MenuItem onClick={handleClose}>Mis Fotos</MenuItem>
                                    <MenuItem onClick={handleClose}>Preguntas</MenuItem>
                                    <MenuItem onClick={handleClose}>Reservas</MenuItem>
                                    <MenuItem onClick={handleClose}>Pagos</MenuItem>
                                    <MenuItem onClick={handleClose}>Reuniones/Minuta</MenuItem>
                                </Menu>
               <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={()=>{navigate("/")}}
                        >
                            <HomeIcon />
                        </IconButton>
                        <Button color="inherit" onClick={()=>{navigate("/casamientos")}}>Casamientos</Button>
                        <Button color="inherit" onClick={()=>{navigate("/eventos/5")}}>Eventos</Button>
                        <Button color="inherit" onClick={()=>{navigate("/deportes/10")}}>Deportes</Button>
                        <Button color="inherit" onClick={()=>{navigate("/modelos/11")}}>Modelos</Button>
                        <Button color="inherit" onClick={()=>{navigate("/otrasCosas/11")}}>OtrasCosas</Button>
                    </Box>
                    <Box sx={{ justifySelf: "end" }}>
                        <Button color="inherit" onClick={()=>{navigate("/loginn")}}>Login</Button>
                    </Box>
                    
                </Toolbar>
                
            </AppBar>
       
            
        </Box>
         
    );

}

export default MenuA;