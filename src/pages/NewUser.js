import { Menu } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import {Button} from "@mui/material";
import { SettingsOverscanOutlined } from "@mui/icons-material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";






export default function NewUser() {
    let navigate = useNavigate();

const [name, setName] = React.useState();
const [pass, setPass] = React.useState();
const [email,setEmail] =React.useState();
const [LastName, setLastName] = React.useState();
const [paq, setPaq] = React.useState({});
const [subbut, setSubbut] = React.useState();

const [rta, setRta] = React.useState("Cargando...");
const [token,setToken] = React.useState();

const handleChangeN = (name, newName) => {
    setName(newName) ;
    //console.log(name.target.value);
    let newPaq = {...paq, first_name : name.target.value};
    setPaq(newPaq);
    //console.log(paq.first_name,"username")
}
const handleChangeA = (last_name, newLastName) => {
    setLastName(newLastName) ;
    let newPaq = {...paq, last_name : last_name.target.value};

    setPaq(newPaq);    
    //console.log(paq.last_name,"user lastname");


}
const handleChangeE = (email, newEmail) => {
    setEmail(newEmail) ;
    let newPaq = {...paq, email : email.target.value}
    setPaq(newPaq);    
    //console.log(paq.email,"email");
}

const handleChangeP = (pass, newPass) => {
    setPass(newPass) ;
    let newPaq = {...paq, password : pass.target.value}
    setPaq(newPaq);    
   // console.log(paq.password,"password");  
}

const handleClickLogin = (subbut, newSubbut) => {
    setSubbut(newSubbut) ;
   // console.log("estoy enviando ",paq.email,"pasword:",paq.password,"completo",paq);

    axios.post("http://localhost:8002/register",paq)



        .then((response)=>{
       //     console.log(response.data.token);
            setRta(response.data);
            setToken(response.data.token);
            let pijas = response.data.token
            let chotas = `/${pijas}`  
            navigate(chotas);
        })
        .catch((error)=>{
            console.log(error);
            setRta("todo mal!");
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
       <Box>Register </Box>

      <Container maxWidth="sm" sx={{m:25, border:1}}>
         
      <Box>
        <TextField
          required
          id="first_name"
          label="Nombre"
          onChange={handleChangeN}
          
          
        />

        </Box>
      
      <Box>
        <TextField
          required
          id="last_name"
          label="Apellido"
          onChange={handleChangeA}
          
          
        />

        </Box>
         
         
          <Box>
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={handleChangeE}
          
          
        />

        </Box>
     
       
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={handleChangeP}
        />
       
        <Box> 
            
       <Button color="inherit" sx={{m:6}}variant="contained" onClick={handleClickLogin}>Registrarse</Button>
  
        </Box>  
      </Container>
      </div>
     
    </Box>
     
  );
}
