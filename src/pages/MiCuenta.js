import React from 'react';
import Box from '@mui/material/Box';
import {Button} from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';

import  {useContext} from 'react'
import UserInfoContext from '../context/UserInfoContext'






export default function MiCuenta() {
    const [value, setValue] = React.useState();
    const [name, setName] = React.useState();
    const [pass, setPass] = React.useState();
    const [email,setEmail] =React.useState();
    const [LastName, setLastName] = React.useState();
    const [paq, setPaq] = React.useState({});
    const []= React.useState();
    const [userdata, setUserdata] = React.useState(); 
    const context = useContext(UserInfoContext);
    const test = () => {console.log(paq)} 
    const handleChangeN = (name, newName) => {
        setName(newName) ;
        console.log(name.target.value);
        let newPaq = {...paq, first_name : name.target.value};
        setPaq(newPaq);
        console.log(paq.first_name,"username")
    }
    const handleChangeA = (last_name, newLastName) => {
        setLastName(newLastName) ;
        let newPaq = {...paq, last_name : last_name.target.value};
    
        setPaq(newPaq);    
        console.log(paq.last_name,"user lastname");
    
    
    }
    const handleChangeE = (email, newEmail) => {
        setEmail(newEmail) ;
        let newPaq = {...paq, email : email.target.value}
        setPaq(newPaq);    
        console.log(paq.email,"email");
    }
    
    const handleChangeP = (pass, newPass) => {
        setPass(newPass) ;
        let newPaq = {...paq, password : pass.target.value}
        setPaq(newPaq);    
        console.log(paq.password,"password");  
    }


    const Modify =(value,setValue) => {
            console.log("aprete noma")
            let token = {token : context.userid};
        
        
            console.log("token actual",token);


                
            axios.post("http://localhost:8002/welcome", token)
                        
                
                .then((response)=>{
                    console.log(response.data,"response1");
                    
                    setPaq(response.data);
                    
                })
                .catch((error)=>{
                    console.log("error-",error,"-error");
                   
                })
        
    

    };      
   




    
  return (
    <div style={{ width: '100%' }}>
        
      <Box component="span" display="block" p={1} m={4} bgcolor="background.paper">
        <div>
          
        {context.username}
        
        </div>
        
        <Button color="inherit" sx={{m:4}}variant="contained" onClick={Modify}>Editar Usuario</Button>
        <Button color="inherit" sx={{m:4}}variant="contained" onClick={test}>Editar Usuario</Button>
      </Box>
      <Container>
        
        <Box>
            <TextField
            required
            id="first_name"
            label={paq.name}
            onChange={handleChangeN}
            
            
            />

        </Box>
        
        <Box>
            <TextField
            required
            id="last_name"
            label={paq.last_name}
            onChange={handleChangeA}
            
            
            />

        </Box>
            
            
        <Box>
            <TextField
            required
            id="outlined-required"
            label={paq.email}
            onChange={handleChangeE}
            
            
            />

        </Box>
        
        <Box>
            <TextField
            required
            id="outlined-password-input"
            label="Change Password"
            type="password"
            autoComplete="current-password"
            onChange={handleChangeP}
            />
        
        </Box>
    </Container>         
    </div>
    
  );
}

