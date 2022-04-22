import { Menu } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import {Button} from "@mui/material";
import { SettingsOverscanOutlined } from "@mui/icons-material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import  {useContext} from 'react'
import UserInfoContext from '../context/UserInfoContext'




import Context from "../context/UserInfoContext";






export default function Loginn() {
    let navigate = useNavigate();

const context = useContext(UserInfoContext);

const [value, setValue] = React.useState();
const [pass, setPass] = React.useState();
const [subbut,setSubbut] =React.useState();
const [userr, setUserr]= React.useState({});
const [rta, setRta] = React.useState("Cargando...");
const [token,setToken] = React.useState();
const [usbut,setUsbut] = React.useState();

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
        context.setUsData("Garompa 3")
        context.showMessage();
         setSubbut(newSubbut) ;
     console.log("estoy tratando de submitear Email:",userr.email,"pasword:",userr.password);
     console.log(context.userid,"chota de mono");
     axios.post("http://localhost:8002/login",userr)



        .then((response)=>{
            console.log(response.data.token);
            setRta(response.data);
            setToken(response.data.token);
            console.log (response.data, "complete response")
            let resp = response.data.token;
            let usrname= response.data.first_name;
            console.log("nombre del vago1",usrname,"....");
            //let url = `/${resp}`;
            //console.log(url,"url que voy a consultar");
            //navigate(url);
                    
            context.setUsData(resp);
            context.setUsername(usrname);
            console.log("token actual2",context.userid,"nombre del vago que está conectado",context.username);
            navigate("/") ;  
        })
        .catch((error)=>{
            console.log(error);
            setRta("todo mal!");
        })



    }
    const handleClickNewUser = (usbut,newUsbut) => {
        setUsbut(newUsbut) ;
        console.log ("boton new user");
        navigate("/newUser");
        
        //<Button color="inherit" onClick={()=>{navigate("/newUser")}}>OtrasCosas</Button>

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
       <Box>Login {context.userid} </Box>

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
       <Button color="inherit" sx={{m:4}}variant="contained" onClick={handleClickNewUser}>Nuevo Usuario</Button>
        </Box>  
      </Container>
      </div>
     
    </Box>
     
  );
}