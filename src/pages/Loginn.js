import { Menu } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import {Button} from "@mui/material";
import { SettingsOverscanOutlined } from "@mui/icons-material";
import axios from 'axios';





export default function Loginn() {

const [value, setValue] = React.useState();
const [pass, setPass] = React.useState();
const [subbut,setSubbut] =React.useState();
const [userr, setUserr]= React.useState({});
const [saludo, setSaludo] = React.useState("Cargando...")

const handleChange = (value, newValue) => {
    setValue(newValue) ;
    console.log(value.target.value);
    let newUser = {...userr, email : value.target.value}
    setUserr(newUser);
    console.log(userr.email,"username")
}
    const handlePass = (pass, newPass) => {
    setPass(newPass) ;
    let newPasswd = {...userr, password : pass.target.value}
    setUserr(newPasswd);    
}

     const handleClickLogin = (subbut, newSubbut) => {
         setSubbut(newSubbut) ;
     console.log("estoy tratando de submitear Email:",userr.email,"pasword:",userr.password);

     axios.post("http://localhost:8002/login")



        .then((response)=>{
            console.log(response);
            setSaludo(response.data);
        })
        .catch((error)=>{
            console.log(error);
            setSaludo("todo mal!");
        })



        }

    
  return (
    <Box
    
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 4, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
       <Box>Login </Box>

      <Container maxWidth="sm" sx={{m:25, border:1}}>
          <Box>
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={handleChange}
          
          
        />

        </Box>
     
       
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={handlePass}
        />
       
        <Box> 
            
       <Button color="inherit" sx={{m:4}}variant="contained" onClick={handleClickLogin}>Login</Button>
       <Button color="inherit" sx={{m:4}}variant="contained" onClick={{}}>Nuevo Usuario</Button>
        </Box>  
      </Container>
      </div>
     
    </Box>
     
  );
}
