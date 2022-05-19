import { AppBar, Box, Button, IconButton, Toolbar,MenuItem,Menu, Collapse } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import * as React from 'react';


import  {useContext} from 'react'
import UserInfoContext from '../context/UserInfoContext'
import { SettingsBluetoothTwoTone } from "@mui/icons-material";










function MenuA() {
    const context = useContext(UserInfoContext);
    
    let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);  
    const [openE, setOpenE] = React.useState(false);  
    const [openB, setOpenB] = React.useState(true);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(anchorEl,"anchor de espadar 1",event.currentTarget);
        console.log("apreto menú");
    
      };

  
      
      
      
      
    const handleClick1 = (event) => {
        console.log(anchorEl2,"anchor de bastor 2",event.currentTarget);
        setAnchorEl2(event.currentTarget);
        console.log("chavon logueado apreta boton");
        
        
    }//aca va lo del boton del tipo logeado     
      

      const handleClose = () => {
        setAnchorEl(null);
        setAnchorEl2(null);
      };

    function Botonlogin () {
        if (context.userid) {
          
            setOpenE(true);
            setOpenB(false);
           }    
    
  return ("")
    }
         

 //const context = useContext(UserInfoContext);
 //console.log (context);  
   
    

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
                      <Botonlogin />  
                      <Collapse in={openB}>
                           
                            <Button color="inherit" sx={{ ml: 1} } onClick={()=>{navigate("/loginn")}}>Login</Button>

                      </Collapse>
                      <Collapse in={openE}> 
                            <Box sx={{ ml: 2, display: "flex", justifyContent: "start" }}>
                            <Button
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu2"
                            sx={{ mr: 2 }}
                            aria-controls="simple-menu2" 
                            aria-haspopup="true" 
                            onClick={handleClick1}
                        >
                        {context.username}
                        </Button>
                            
                            <Menu
                            id="simple-menu2"
                            anchorEl={anchorEl2}
                            keepMounted
                            open={anchorEl2}
                            onClose={handleClose}
                            >
                            <MenuItem onClick={()=>{setAnchorEl(null);navigate("/micuenta")}}>Mi cuenta</MenuItem>

                            <MenuItem onClick={handleClose}>Mis Fotos</MenuItem>
                            <MenuItem onClick={handleClose}>Preguntas</MenuItem>
                            <MenuItem onClick={handleClose}>Reservas</MenuItem>
                            <MenuItem onClick={handleClose}>Pagos</MenuItem>
                            <MenuItem onClick={handleClose}>Reuniones/Minuta</MenuItem>
                            </Menu>
                        </Box>
                      </Collapse>
                        
                    </Box>
                    
                </Toolbar>
                
            </AppBar>
       
            
        </Box>
         
    );

}

export default MenuA;